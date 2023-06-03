import {body} from "express-validator";


const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}(\/\S*)?$/;
export const CreateBlogDto = () => {
  return [
    body('websiteUrl').isLength({min: 1, max: 100}).withMessage('invalid').matches(urlPattern).withMessage('dd'),
    body('name').trim().isString().isLength({min: 1, max: 15}),
    body('description').trim().isLength({min: 1, max: 500}),
  ];
}

// export const CreateBlogDto = () => {
//   return [
//     body('websiteUrl').trim().custom(websiteUrl => {
//       const isUrl = urlPattern.test(websiteUrl);
//       if(!isUrl || websiteUrl.length < 1 || websiteUrl.length >= 100){
//         throw new Error('invalid url')
//       }
//       return true;
//     }),
//     body('name').trim().isString().isLength({ max: 15}),
//     body('description').trim().isLength({ max: 500}),
//   ];
// }