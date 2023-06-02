import express from "express";
import blogController from "./blog.controller";
import postController from './post.controller';
import  blogTestController from './blog.controller.spec'

const router = express.Router();

router.use('/blog', blogController);
router.use('/post', postController);
router.use("/testing", blogTestController);

export default router;