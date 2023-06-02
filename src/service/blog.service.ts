import {IBlog} from "../types/blog.interface";
import { Request, Response} from "express";

export let data: IBlog[] = [];

type Message = {
  message: string;
};

export class BlogService {

  async getAll(req: Request, res: Response): Promise<Response<IBlog[]>> {
    return res.status(200).send(data)
  }

  async getOne(req: Request, res: Response): Promise<Response<IBlog | Message>> {
    const post = data.find((post) => post.id == req.params.id);
    if(!post) {
      return res.status(404).send('Not Found');
    }
    return res.status(200).send(post);
  }

  async create (req: Request, res: Response): Promise<Response<IBlog>> {
    const blog = req.body;
    blog.id = (+new Date()).toString();
    data.push(blog);
    return res.status(201).send(blog);
  }

  async update(req: Request, res: Response){
    const blog = data.find((blog) => blog.id === req.params.id);
    if(!blog){
      return res.status(404).send('Not Found');
    }
    Object.assign(blog, req.body);
    return res.status(204).send();
  }

  async delete (req: Request, res: Response) {
    const deleted = data.filter((blog) => blog.id !== req.params.id);
    if(data.length > deleted.length){
      data = deleted
      return res.status(204).send();
    }
    return  res.status(404).send('Not Found')
  }
}