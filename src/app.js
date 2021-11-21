import express from 'express';

const PORT = 5000;

const app = express();

app.get('/', (_, res) => res.json({ message: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}`);
});
