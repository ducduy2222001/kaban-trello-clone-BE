import { boardRoutes } from "./boardRoutes";

import express from "express";

const Router = express.Router();

Router.use("/boards", boardRoutes);

export const APIs = Router;
