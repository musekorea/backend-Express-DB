import express from 'express';
import { rootController } from '../controller/rootController';

const rootRouter = express.Router();

rootRouter.get('/', rootController);

export default rootRouter;
