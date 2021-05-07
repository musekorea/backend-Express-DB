import express from 'express';
import './db.js'; //파일을 따로 분리한 것 뿐
import router from './route.js';
import cors from 'express';

const app = express();

app.set('view engine', 'pug');
app.use(cors()); //cors 보안 오류대비
app.use(express.json()); //bodyparser built-in 버젼
app.use(express.urlencoded({ extended: true })); //bodyparser built-in 버젼
app.use(express.static(__dirname + '/public'));
app.use(router); //미들웨어로 등록

app.listen(8080, () => {
  console.log(`💻 Express Server is listening on PORT 8080`);
});
