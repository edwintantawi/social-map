import express from 'express';

// config
import { serverOptions } from './config/index.js';

// routers
import threadRouters from './routers/threads.router.js';

const app = express();

app.use(express.json());

app.get('/', (_, res) => res.json({ message: 'ok' }));

app.use('/threads', threadRouters);

app.listen(serverOptions.port, () => {
  console.log(`Server start at http://localhost:${serverOptions.port}`);
});
