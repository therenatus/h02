"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlogDto = void 0;
const express_validator_1 = require("express-validator");
const CreateBlogDto = () => {
    return [
        (0, express_validator_1.body)('title').trim().notEmpty().isString().isLength({ min: 1, max: 15 }),
        (0, express_validator_1.body)('description').trim().notEmpty().isLength({ min: 1, max: 500 }),
        (0, express_validator_1.body)('websiteUrl').isLength({ min: 1, max: 100 }).isURL()
    ];
};
exports.CreateBlogDto = CreateBlogDto;
