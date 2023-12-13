import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createLayout, editLayout, getLayOutByType } from "../controller/layout.controller";

const layoutRouter = express.Router();
layoutRouter.post("/create-layout",isAuthenticated,authorizeRoles("admin"),createLayout)
layoutRouter.put("/update-layout",isAuthenticated,authorizeRoles("admin"),editLayout)
layoutRouter.get("/get-layout",getLayOutByType)
export default layoutRouter;