import { StatusCodes } from "http-status-codes";
import { boardService } from "~/services/boardService";

const createBoard = async (req, res, next) => {
  try {
    const createdBoard = await boardService.createBoard(req.body);
    res.status(StatusCodes.CREATED).json(createdBoard);
  } catch (error) {
    next(error);
  }
};

export const boardController = {
  createBoard,
};
