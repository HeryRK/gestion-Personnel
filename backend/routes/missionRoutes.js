import express from "express";
import { createMission, deleteMission, getMission, getMissionById, updateMission } from "../controllers/missionController.js";

const missionRouter = express.Router();


missionRouter.get("/", getMission);
missionRouter.get("/:id", getMissionById);
missionRouter.post("/", createMission);
missionRouter.put("/:id", updateMission);
missionRouter.delete("/id", deleteMission);

export default missionRouter;