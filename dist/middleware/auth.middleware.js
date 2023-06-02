"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const validUsername = 'admin';
const validPassword = 'qwerty';
const AuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Basic ')) {
        const credentials = atob(authHeader.slice(6));
        const [username, password] = credentials.split(':');
        if (username === validUsername && password === validPassword) {
            return next();
        }
    }
    res.setHeader('WWW-Authenticate', 'Basic realm="Authentication Required"');
    res.status(401).send('Authentication Required');
};
exports.AuthMiddleware = AuthMiddleware;
