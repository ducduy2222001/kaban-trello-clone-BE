import { StatusCodes } from "http-status-codes";

const createNewBoard = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({ message: "Post: create new board" });
  } catch (error) {
    next(error);
  }
};

export const boardController = {
  createNewBoard,
};
