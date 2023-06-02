import { Request, Response } from "express";
import {data as blog} from './blog.service'
import {data as post} from './post.service'

class Test {
  async deleteAll(req: Request, res: Response) {
    blog.splice(0, blog.length);
    post.splice(0, post.length);
    res.status(204).send();
  }
}

export { Test };