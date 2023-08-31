import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { sessionRouter } from './routes/session.routes';
import userRouter from './routes/user.routes';
import { handleErrors } from './middleware/handleErrors.middleware';
import { categoriesRouter } from './routes/category.routes';
import { realEstateRouter } from './routes/realEstate.routes';

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRouter);

app.use(handleErrors);

export default app;
