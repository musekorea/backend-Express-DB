import express from 'express';
import { loginGetController } from '../controller/loginController';
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
const loginRouter = express.Router();

const fakeUser = {
  email: 'm3muse@gmail.com',
  password: '0000',
};

loginRouter.get('/login', loginGetController);

passport.serializeUser((user, done) => {
  console.log(`serializeUser`, user);
  done(null, user.email);
});

passport.deserializeUser((id, done) => {
  console.log(`deserializeUser`, id);
  done(null, fakeUser);
  //이렇게 done에 보내주는 값을 내가 원하는 값을 보내줄수도 있음
  //꼭 id 이렇게 정해진게 아님
  //id값으로 DB로 검색한 값을 변수에 넣고 그걸 보내줘도 되고
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: true,
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      console.log('localStrategy', username, password);
      if (username === fakeUser.email && password == fakeUser.password) {
        console.log(`다 맞았음`);
        return done(null, fakeUser);
      } else if (username !== fakeUser.email) {
        console.log(`이메일 틀렸음`);
        return done(null, false, { message: '이메일 틀렸어요' });
      } else {
        console.log(`비번 틀렸음`);
        return done(null, false, { message: `비번이 틀렸어요` });
      }
    }
  )
);

loginRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/authOk',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

export default loginRouter;
