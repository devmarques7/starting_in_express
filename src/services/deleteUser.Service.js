import database from "../database/base";

const deleteUserService = (id) => {
  const user = database.findIndex((user) => user.id === id);

  if (user === -1) {
    throw new Error("User not found");
  }

  database.splice(user, 1);

  return {
    message: "User deleted with success",
  };
};

export default deleteUserService;
