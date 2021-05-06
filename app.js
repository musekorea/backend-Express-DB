import express from 'express';
import router from './route.js';
import cors from 'express';

const app = express();

app.set('view engine', 'pug');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(router);

app.listen(8080, () => {
  console.log(`📌 Our Server is listening on PORT 8080`);
});
