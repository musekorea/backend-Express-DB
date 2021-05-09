import express from 'express';
import rootRouter from './rootRouter';
import loginRouter from './loginRouter';
import asyncRouter from './asyncRouter';
import joinRouter from './joinRouter';

const router = express.Router();

router.use(rootRouter);
router.use(loginRouter);
router.use(asyncRouter);
router.use(joinRouter);

export default router;
