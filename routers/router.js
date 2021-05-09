import express from 'express';
import rootRouter from './rootRouter';
import loginRouter from './loginRouter';
import asyncRouter from './asyncRouter';
import joinRouter from './joinRouter';
import editDbRouter from './editDbRouter';

const router = express.Router();

router.use(rootRouter);
router.use(loginRouter);
router.use(asyncRouter);
router.use(joinRouter);
router.use(editDbRouter);

export default router;
