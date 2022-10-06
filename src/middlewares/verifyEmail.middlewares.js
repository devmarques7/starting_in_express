import database from "../database/base";

const verifyEmail = (request, response, next) => {
  const { email } = request.body;

  const checkingExisting = database.find((user) => user.email === email);

  const message = {
    message: "E-mail already registered",
  };

  return checkingExisting ? response.status(400).json(message) : next();
};

export default verifyEmail;
