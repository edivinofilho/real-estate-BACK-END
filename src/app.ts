import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { sessionRouter } from './routes/session.routes';
import userRouter from './routes/user.routes';




const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);


export default app;
