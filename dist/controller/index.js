"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_controller_1 = __importDefault(require("./blog.controller"));
const post_controller_1 = __importDefault(require("./post.controller"));
const router = express_1.default.Router();
router.use('/blog', blog_controller_1.default);
router.use('/post', post_controller_1.default);
exports.default = router;
