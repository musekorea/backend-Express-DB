import express from 'express';
import { rootController } from '../controller/rootController';

const rootRouter = express.Router();

rootRouter.get('/', rootController);

export default rootRouter;
//이 파일이 아예 필요가 없음 ~
