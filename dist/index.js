"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const controller_1 = __importDefault(require("./controller"));
const auth_middleware_1 = require("./middleware/auth.middleware");
dotenv_1.default.config();
if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}
const PORT = parseInt(process.env.PORT);
const app = (0, express_1.default)();
app.use((0, body_parser_1.default)());
app.post('*', auth_middleware_1.AuthMiddleware);
app.use('/api', controller_1.default);
app.listen(PORT || 3333, () => {
    console.log(`Server started on port ${PORT}`);
});
