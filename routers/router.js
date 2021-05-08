import express from 'express';
import rootRouter from './rootRouter';
import loginRouter from './loginRouter';
import asyncRouter from './asyncRouter';

const router = express.Router();

router.use(rootRouter);
router.use(loginRouter);
router.use(asyncRouter);

export default router;
