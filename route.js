import express from 'express';
import connection from './db';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/public/index.html');
});

router.get('/login', (req, res) => {
  console.log(req.path);
  res.render('login.pug');
});

router.post('/login', (req, res) => {
  console.log(req.body);
  res.render('welcome.pug', {
    data: req.body.id,
    path: req.path,
  });
});

router.post('/async', (req, res) => {
  const inputID = req.body.id;
  const dbID = connection.query('select * from user', (error, rows, fields) => {
    if (error) throw error;
    if (inputID === rows[0].email) {
      console.log(`Your id is exist`);
      res.json({
        message: `${inputID} is exist in our DB`,
        id: rows[0].email,
      });
    }
  });
});

export default router;
