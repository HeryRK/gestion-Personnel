import express from "express";
import { createService, deleteService, getService, getServices, updateService } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getService);
serviceRouter.post("/", createService);
serviceRouter.put("/:id", updateService);
serviceRouter.delete("/:id", deleteService);

export default serviceRouter;