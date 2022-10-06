import jwt from "jsonwebtoken";

const verifyAdmin = (request, response, next) => {
  let token = request.headers.authorization;

  token = token.split(" ")[1];

  if (!token) {
    response.status(400).json({
      message: "Missing authorization headers for admin access",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      response.status(400).json({
        message: "Invalid authorization for admin access",
      });
    }
    JSON.parse(decoded.admin)
      ? next()
      : response.status(401).json({ message: "Unauthorized admin access" });
  });
};

export default verifyAdmin;
