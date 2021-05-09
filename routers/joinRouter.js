import express from 'express';
import { joinGetController } from '../controller/joinController';
import { joinPostController } from '../controller/joinController';

const joinRouter = express.Router();

joinRouter.get('/join', joinGetController);
joinRouter.post('/join', joinPostController);

export default joinRouter;
