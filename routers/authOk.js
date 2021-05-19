import express from 'express';
const authRouter = express.Router();

authRouter.get('/authOk', async (req, res) => {
  console.log(`authOk`);
  await console.log(req.user.email);
  res.send(`<h1>${req.user.email}님 로그인되었습니다 </h1> <br>
  <a href="login">LOGIN상태를 체크해보세요<a>`);
});

export default authRouter;
