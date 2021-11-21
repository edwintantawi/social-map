import express from 'express';
import threadRouters from './routers/threads.router.js';

const PORT = 5000;

const app = express();

app.use(express.json());

app.get('/', (_, res) => res.json({ message: 'ok' }));

app.use('/threads', threadRouters);

app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}`);
});
