import express from "express";
import {BlogService} from '../service/blog.service'
import {CreateBlogDto} from "./dto/create-blog.dto";
import {InputValidationMiddleware} from "../middleware/inputValidationMiddleware";

const router = express.Router();
const service = new BlogService();

router.get('/', service.getAll );
router.post('/',CreateBlogDto(), InputValidationMiddleware, service.create);
router.get('/:id', service.getOne);
router.put('/:id', service.update);
router.delete('/:id', service.delete);


export default router;