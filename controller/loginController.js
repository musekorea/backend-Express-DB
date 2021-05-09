export const loginGetController = (req, res) => {
  console.log(req.path, req.method);
  res.render('login');
};

export const loginPostController = (req, res) => {
  console.log(req.path, req.method, req.body);
  res.render('welcome-login.pug', {
    data: req.body.email,
    path: req.path,
  });
};
