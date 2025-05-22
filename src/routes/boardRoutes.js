const express = require("express");
const { StatusCodes } = require("http-status-codes");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "get list boards" });
}).post("/", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "create new board" });
});

export const boardRoutes = Router;
