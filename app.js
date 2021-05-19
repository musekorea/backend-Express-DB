import express from 'express';
import cors from 'express';
import router from './routers/router';
import session from 'express-session';
import passport from 'passport';
const FileStore = require('session-file-store')(session);
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';

const app = express();

app.set('view engine', 'pug');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(
  session({
    secret: 'moyamoya',
    resave: false,
    saveUninitialized: true,
    //store: new FileStore(),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

export default app;
