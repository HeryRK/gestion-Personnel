import express from "express";
import { getPersonalController, addPersonalController , removePersonalController , updatePersonalController } from "../controllers/personalController.js";

const personalRouter = express.Router();

personalRouter.get("/getPersonals" , getPersonalController);
personalRouter.post("/addPersonal", addPersonalController);
personalRouter.delete("/:id", removePersonalController);
personalRouter.put("/:id", updatePersonalController);

export default personalRouter;