import express from 'express';
import { loginGetController } from '../controller/loginController';
import { loginPostController } from '../controller/loginController';

const loginRouter = express.Router();

loginRouter.get('/login', loginGetController);
loginRouter.post('/login', loginPostController);

export default loginRouter;
