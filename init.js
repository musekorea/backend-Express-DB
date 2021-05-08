import app from './app';
import './db.js';

app.listen(8080, () => {
  console.log(`💻 Express Server is listening on PORT 8080`);
});
