import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import './db.js';

app.listen(process.env.PORT, () => {
  console.log(`💻 Express Server is listening on PORT 8080`);
});
