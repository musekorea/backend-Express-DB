import express from 'express';
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
export default router;
