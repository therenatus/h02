import {body} from "express-validator";

export const CreateBlogDto = () => {
  return [
    body('title').trim().notEmpty().isString().isLength({min: 1, max: 15}),
    body('description').trim().notEmpty().isLength({min: 1, max: 500}),
    body('websiteUrl').isLength({min: 1, max: 100}).isURL()
  ];
}