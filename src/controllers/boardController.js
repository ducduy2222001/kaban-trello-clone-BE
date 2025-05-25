import { StatusCodes } from "http-status-codes";

const createNewBoard = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({ message: "Post: create new board" });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};

export const boardController = {
  createNewBoard,
};
