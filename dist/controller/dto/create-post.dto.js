"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
const express_validator_1 = require("express-validator");
const CreatePostDto = () => {
    return [
        (0, express_validator_1.body)('title').trim().notEmpty().isString().isLength({ min: 1, max: 15 }),
        (0, express_validator_1.body)('shortDescription').trim().notEmpty().isLength({ min: 1, max: 100 }),
        (0, express_validator_1.body)('content').trim().notEmpty().isLength({ min: 1, max: 1000 }),
        (0, express_validator_1.body)('blogId').trim().isString()
    ];
};
exports.CreatePostDto = CreatePostDto;
