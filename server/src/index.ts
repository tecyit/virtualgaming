import express from 'express';

const PORT = 4000;

const app = express();

// tslint:disable-next-line: variable-name
app.use('/', (_req, res) => {
  res.send('HELLO');
});

// tslint:disable-next-line: no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
