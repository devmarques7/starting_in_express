import database from "../database/base";
import jwt from "jsonwebtoken";

const verifyAuth = (request, response, next) => {
  let token = request.headers.authorization;
  const { id } = request.params;
  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      response.status(400).json({
        message: "Invalid authorization",
      });
    }

    const userAccess = database.find((user) => user.email === decoded.email);

    if (!userAccess) {
      return response.status(400).json({
        message: "user not found",
      });
    }

    if (userAccess.id === id) {
      return next();
    }

    if (JSON.parse(userAccess.isAdm) === true) {
      return next();
    }

    response.status(400).json({
      message: "Missing admin permissions",
    });
  });
};

export default verifyAuth;
