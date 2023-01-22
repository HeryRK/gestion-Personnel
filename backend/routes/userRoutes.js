import express from "express";
import { getUsers, login, register } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", getUsers)
UserRouter.post("/login", login );
UserRouter.post("/register", register);

export default UserRouter;