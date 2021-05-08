import express from 'express';
import cors from 'express';
import router from './routers/router';
const app = express();

app.set('view engine', 'pug');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(router);

export default app;
