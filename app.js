import express from 'express';
import router from './route.js';
const app = express();
app.use(router);
app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
  console.log(`📌 Our Server is listening on PORT 8080`);
});
