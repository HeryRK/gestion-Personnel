import express from "express";
import { getPersonalController, addPersonalController } from "../controllers/personalController.js";

const personalRouter = express.Router();

personalRouter.get("/getPersonals" , getPersonalController);
personalRouter.post("/addPersonal", addPersonalController);

export default personalRouter;