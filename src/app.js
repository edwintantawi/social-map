import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// config
import { serverOptions } from './config/index.js';

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

app.use('/', viewsRouter);
app.use('/threads', threadsRouter);

app.listen(serverOptions.port, () => {
  console.log(`Server start at http://localhost:${serverOptions.port}`);
});
