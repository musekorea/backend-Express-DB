export const loginGetController = (req, res) => {
  console.log(req.path, req.method);
  console.log('login page');
  console.log(`login Test`, req.user);
  if (req.user) {
    res.send(`<h1>이미 로그인 하셨습니다<h1>
    <h3>logout 하시겠습니까?<h3>
    <form action="/logout" method="get">
    <input type="submit" value="Logout">
    </form>    
    `);
  } else {
    console.log(req.user, `logout상태입니다`);
    const flashMSG = req.flash();
    res.render('login', { flashMSG });
  }
};
