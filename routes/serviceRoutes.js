import express from "express";
import { getServiceController } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.get("/getService", getServiceController);

export default serviceRouter;