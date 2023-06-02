import {NextFunction, Request, Response} from "express";

const validUsername = 'admin';
const validPassword = 'qwerty';
export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
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
}
