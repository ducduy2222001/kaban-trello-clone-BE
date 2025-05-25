import { boardRoutes } from "./boardRoutes";

const express = require("express");

const Router = express.Router();

Router.use("/boards", boardRoutes);

export const APIs = Router;
