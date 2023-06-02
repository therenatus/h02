"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputValidationMiddleware = void 0;
const express_validator_1 = require("express-validator");
const validationErrorFormatter = ({ msg, path }) => {
    return {
        field: path,
        message: msg,
    };
};
const InputValidationMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req).formatWith(validationErrorFormatter);
    if (!errors.isEmpty()) {
        res.status(400).json({ errorMessage: errors.array() });
    }
    else {
        next();
    }
};
exports.InputValidationMiddleware = InputValidationMiddleware;
