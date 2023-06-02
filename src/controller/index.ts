import express from "express";
import blogController from "./blog.controller";
import postController from './post.controller';

const router = express.Router();

router.use('/blog', blogController);
router.use('/post', postController);

export default router;