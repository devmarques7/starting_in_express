import database from "../database/base";

const updateService = (id, updates) => {
  const date = new Date();
  console.log(id);

  if (updates.isAdm) {
    throw new Error("Unauthorized update admin");
  }

  const user = database.findIndex((user) => user.id === id);

  if (user === -1) {
    throw new Error("User not found");
  }

  database[user] = { ...database[user], ...updates };

  const newUpdate = {
    ...database[user],
    updatedAt: date.toISOString(),
  };
  database.push(newUpdate);

  database.splice(user, 1);

  return newUpdate;
};

export default updateService;
