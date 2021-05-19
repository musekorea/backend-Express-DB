import express from 'express';
const logoutRouter = express.Router();

logoutRouter.get('/logout', (req, res) => {
  console.log(`logout check`, req.path);
  req.logout();
  req.session.save(() => {
    res.redirect('/login');
  });
});

export default logoutRouter;
