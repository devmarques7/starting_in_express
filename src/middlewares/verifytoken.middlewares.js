import jwt from "jsonwebtoken";

const verifyToken = (request, response, next) => {
  let token = request.headers.authorization;
  const { id } = request.params;

  if (!token) {
    response.status(400).json({
      message: "Missing authorization headers",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      response.status(400).json({
        message: "Invalid authorization",
      });
    }
    next();
  });
};

export default verifyToken;
