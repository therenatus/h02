import {IPost} from "../types/post.interface";
import { Request, Response} from "express";


export let data: IPost[] = [];
type Message = {
  message: string;
};
export class PostService {

  async getAll(req: Request, res: Response): Promise<Response<IPost[]>> {
    return res.status(200).send(data)
  }

  async getOne(req: Request, res: Response): Promise<Response<IPost | Message>> {
    const post = data.find((post) => post.id == req.params.id);
    if(!post) {
      return res.status(404).send('Not Found');
    }
    return res.status(200).send(post);
  }

  async create (req: Request, res: Response): Promise<Response<IPost>> {
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
      return res.status(200).send(data);
    }
    return  res.status(404).send('Not Found')
  }
}