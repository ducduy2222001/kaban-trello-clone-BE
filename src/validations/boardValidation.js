import Joi from "joi";
import { StatusCodes } from "http-status-codes";

const validationCreate = async (req, res, next) => {
  const schemaBoard = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(200).trim().strict(),
  });

  try {
    await schemaBoard.validateAsync(req.body, { abortEarly: false });
    // validation passed => run controller
    next();
  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error: new Error(error).message,
    });
  }
};

export const boardValidation = {
  validationCreate,
};
