"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
let data = [];
class PostService {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send(data);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = data.find((post) => post.id == req.params.id);
            if (!post) {
                return res.status(404).send('Not Found');
            }
            return res.status(200).send(post);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = req.body;
            blog.id = (+new Date()).toString();
            data.push(blog);
            return res.status(201).send(blog);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = data.find((blog) => blog.id === req.params.id);
            if (!blog) {
                return res.status(404).send('Not Found');
            }
            Object.assign(blog, req.body);
            return res.status(204).send();
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = data.filter((blog) => blog.id !== req.params.id);
            if (data.length > deleted.length) {
                data = deleted;
                return res.status(200).send(data);
            }
            return res.status(404).send('Not Found');
        });
    }
}
exports.PostService = PostService;
