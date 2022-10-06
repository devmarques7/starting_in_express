import { v4 as uuidv4 } from "uuid";
import * as bcryptjs from "bcryptjs";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import database from "../database/base";

const registerUserService = async (name, email, password, isAdm) => {
  const encrypt = await bcrypt.hash(password, 10);
  const date = new Date();

  const registerUser = {
    id: uuidv4(),
    name,
    email,
    password: encrypt,
    isAdm,
    createdOn: date.toISOString(),
  };

  const user = {
    id: registerUser.id,
    name: registerUser.name,
    email: registerUser.email,
    isAdm: registerUser.isAdm,
    createdOn: registerUser.createdOn,
    updatedOn: date.toISOString(),
  };

  database.push(registerUser);

  return user;
};

export default registerUserService;
