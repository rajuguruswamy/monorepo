const express = require('express');
const morgan = require('morgan');
const math = require('@workspace/mathlib');

const app = express();
const port = 3002;

app.use(morgan('tiny'));

app.get('/health', (req, res) => {
  res.json({ status: 'Project 2 API is healthy' });
});

app.get('/mul', (req, res) => {
  const result = math.multiply(2, 3);
  res.json({ Opreation: '2*3', result });
});

app.listen(port, () => {
  console.log(`Project2 is runnng on http://localhost:${port}`);
});
