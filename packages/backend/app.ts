import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import APIRouter from './src/routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', APIRouter);

export default app;
