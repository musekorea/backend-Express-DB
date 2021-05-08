import express from 'express';
import asyncController from '../controller/asyncController';
const asyncRouter = express.Router();

asyncRouter.post('/async', asyncController);

export default asyncRouter;
