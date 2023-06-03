import {body} from "express-validator";
import {data} from '../../service/blog.service'

export const CreatePostDto = () => {
  return [
    body('title').trim().isString().isLength({min: 1, max: 15}),
    body('shortDescription').trim().isLength({min: 1, max: 100}),
    body('content').trim().isLength({min: 1, max: 1000}),
    body('blogId').trim().isString().custom(blogId => {
      const blog = data.find(blog => blog.id === blogId)
      if(!blog) {
        throw new Error('BlogID not found')
      }
      return true;
    })
  ];
}