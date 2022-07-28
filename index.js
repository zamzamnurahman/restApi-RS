import Express from "express";
import cors from "cors";
import userRouter from "./router/UserRoute.js";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(userRouter);

app.listen(5000, () => console.log("server up and Running port 5000"));
