import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

const validationErrorFormatter = ({ msg, path }: any) => {
  return {
    field: path,
    message: msg,
  };
};
export const InputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req).formatWith(validationErrorFormatter);
  if(!errors.isEmpty()) {
    res.status(400).json({errorMessage: errors.array()})
  }else{
    next();
  }
}