import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';

import { passport } from './services/passport.js';

import { User } from './models/Users.model.js';
import { Thread } from './models/Threads.model.js';

// config
import { getEnv, serverOptions } from './config/index.js';

// routers
import threadsRouter from './routers/threads.router.js';
import viewsRouter from './routers/views.router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(
  session({
    secret: getEnv('SESSION_SECRET'),
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', viewsRouter);
app.use('/threads', threadsRouter);

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);
app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

const syncTable = async () => {
  await User.sync();
  await Thread.sync();
};

syncTable()
  .then(() => {
    app.listen(serverOptions.port, () => {
      console.log(`Server start at http://localhost:${serverOptions.port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
