import express from 'express';
import editDbController from '../controller/editDbController';
const editDbRouter = express.Router();

editDbRouter.get('/edit', editDbController);

export default editDbRouter;
