export const joinGetController = (req, res) => {
  console.log(req.path, req.method);
  res.render('join');
};

export const joinPostController = (req, res) => {
  console.log(req.path, req.method, req.body);
  /* res.render('welcome.pug', {
    data: req.body.id,
    path: req.path,
  }); */
};
