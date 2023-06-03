import {IPost} from "../types/post.interface";
import { Request, Response} from "express";
import {data as blogs} from './blog.service';


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
    const post = req.body;
    const blog = blogs.find((blog) => blog.id === req.body.blogId);
    const unique = data.find((post) => post.blogId !== req.body.blogId);
    if(!unique) {
      res.status(401).send
    }
    post.blogName = blog?.name;
    post.id = (+new Date()).toString();
    data.push(post);
    return res.status(201).send(post);
  }

  async update(req: Request, res: Response){
    const post = data.find((post) => post.id === req.params.id);
    if(!post){
      return res.status(404).send('Not Found');
    }
    Object.assign(post, req.body);
    return res.status(204).send();
  }

  async delete (req: Request, res: Response) {
    const deleted = data.filter((post) => post.id !== req.params.id);
    if(data.length > deleted.length){
      data = deleted
      return res.status(204).send();
    }
    return  res.status(404).send('Not Found')
  }
}