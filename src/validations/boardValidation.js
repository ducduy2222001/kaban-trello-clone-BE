import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

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
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message));
  }
};

export const boardValidation = {
  validationCreate,
};
