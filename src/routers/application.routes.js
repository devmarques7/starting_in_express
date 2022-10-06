import { Router } from "express";

import verifyAuth from "../middlewares/verifyAuth.middlewares";
import verifyAdmin from "../middlewares/verifyAdm.middlewares";
import verifyToken from "../middlewares/verifytoken.middlewares";
import verifyEmail from "../middlewares/verifyEmail.middlewares";

import loginController from "../controllers/loginUser.Controller";
import listUserController from "../controllers/listUser.Controller";
import updateUserController from "../controllers/updateUser.Controller";
import profileUserController from "../controllers/profileUser.Controller";
import registerUserController from "../controllers/registerUser.Controller";
import deleteUserController from "../controllers/deleteUser.Controller";

const router = Router();

router.post("/login", loginController);
router.post("/users", verifyEmail, registerUserController);
router.get("/users/profile", verifyToken, profileUserController);
router.get("/users", verifyToken, verifyAdmin, listUserController);
router.patch("/users/:id", verifyToken, verifyAuth, updateUserController);
router.delete("/users/:id", verifyToken, verifyAuth, deleteUserController);

export default router;
