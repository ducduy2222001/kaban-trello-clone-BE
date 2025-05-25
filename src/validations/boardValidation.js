import Joi from "joi";
import { StatusCodes } from "http-status-codes";

const createNewBoard = async (req, res, next) => {
  const schemaBoard = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(200).trim().strict(),
  });

  try {
    await schemaBoard.validateAsync(req.body, { abortEarly: false });
    res.status(StatusCodes.CREATED).json({ message: "Post: create new board" });
    next();
  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error: new Error(error).message,
    });
  }
};

export const boardValidation = {
  createNewBoard,
};
