import express from "express";
import { createDepartement, deleteDepartement, getDepartement, getDepartementById, updateDepartement } from "../controllers/departementController.js";


const departementRouter = express.Router();

departementRouter.get("/", getDepartement);
departementRouter.get("/:id", getDepartementById);
departementRouter.post("/", createDepartement);
departementRouter.put("/:id", updateDepartement);
departementRouter.delete("/:id", deleteDepartement);

export default departementRouter;

