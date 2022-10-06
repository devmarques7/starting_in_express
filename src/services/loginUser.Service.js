import bcrypt from "bcryptjs/dist/bcrypt";
import database from "../database/base";
import jwt from "jsonwebtoken";

const loginService = async (email, password) => {
  const verifyUser = database.find((user) => user.email === email);
  if (!verifyUser) {
    throw new Error("Wrong email or password");
  }

  const verifyPassword = await bcrypt.compare(password, verifyUser.password);

  if (!verifyPassword) {
    throw new Error("Wrong email or password");
  }

  const token = jwt.sign(
    { email: email, admin: verifyUser.isAdm },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: verifyUser.id,
    }
  );

  return {
    token: token,
  };
};

export default loginService;
