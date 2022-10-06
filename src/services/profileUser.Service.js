import database from "../database/base";
import jwt from "jsonwebtoken";

const profileUserService = (token) => {
  token = token.split(" ")[1];
  let userProfile = null;

  jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
    if (error) {
      throw new Error(error.message);
    }
    userProfile = database.find((user) => user.email === decode.email);
    if (!userProfile) {
      throw new Error({ message: "User not found" });
    }
  });

  return userProfile;
};

export default profileUserService;
