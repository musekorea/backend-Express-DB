import connection from '../db';

export const joinGetController = (req, res) => {
  console.log(req.path, req.method);
  res.render('join');
};

export const joinPostController = (req, res) => {
  console.log(req.path, req.method, req.body);
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  let insertQuery = { email, password };
  connection.query(`insert into user set?`, insertQuery, (error, rows) => {
    if (error) {
      return console.error('error', error.message);
    }
    console.log('Insert DB ok');
    res.render('welcome-join', { id: rows.insertId, path: req.path });
  });
};
