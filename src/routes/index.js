import { boardRoutes } from "./boardRoutes";

const express = require("express");
const { StatusCodes } = require("http-status-codes");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Hello Duy" });
});

Router.use("/boards", boardRoutes);

export const APIs = Router;
