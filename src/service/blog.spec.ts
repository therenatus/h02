import { Request, Response } from "express";
import {IBlog} from "../types/blog.interface";


const data: IBlog[] = [];

class Test {
  async deleteAll(req: Request, res: Response) {
    data.splice(0, data.length);
    res.status(204).send();
  }
}

export { Test };