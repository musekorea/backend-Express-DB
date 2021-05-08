import express from 'express';
import cors from 'express';
import rootRouter from './routers/rootRouter';
import loginRouter from './routers/loginRouter';
import asyncRouter from './routers/asyncRouter';
const app = express();

app.set('view engine', 'pug');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(rootRouter);
app.use(loginRouter);
app.use(asyncRouter);

export default app;
