import {body} from "express-validator";

export const CreatePostDto = () => {
  return [
    body('title').trim().notEmpty().isString().isLength({min: 1, max: 15}),
    body('shortDescription').trim().notEmpty().isLength({min: 1, max: 100}),
    body('content').trim().notEmpty().isLength({min: 1, max: 1000}),
    body('blogId').trim().isString()
  ];
}