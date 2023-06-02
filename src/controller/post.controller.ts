import express from "express";
import { PostService } from '../service/post.service';
import {CreatePostDto} from "./dto/create-post.dto";
import {InputValidationMiddleware} from "../middleware/inputValidationMiddleware";

const router = express.Router();
const service = new PostService();

router.get('/', service.getAll );
router.post('/',CreatePostDto, InputValidationMiddleware, service.create);
router.get('/:id', service.getOne);
router.put('/:id', service.update);
router.delete('/:id', service.delete);
export default router;