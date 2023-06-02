import express, {Express} from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import router from "./controller";
import {AuthMiddleware} from "./middleware/auth.middleware";

dotenv.config()
if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT);
const app: Express = express();

app.use(bodyParser());
app.post('*', AuthMiddleware);
app.put('*', AuthMiddleware);
app.use('/api', router);


app.listen(PORT || 3333, () => {
  console.log(`Server started on port ${PORT}`);
});