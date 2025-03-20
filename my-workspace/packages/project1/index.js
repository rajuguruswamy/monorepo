const express = require('express');
const _ = require('lodash');
const math = require('@workspace/mathlib');
const mathUtil = require('@library/mathutil');

const app = express();
const port = 3001;

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'raju' },
    { id: 2, name: 'dileepan' },
    { id: 2, name: 'Mark' },
  ];
  res.json(_.shuffle(users));
});

app.get('/add', (req, res) => {
  const result = math.add(1, 3);
  res.json({ Opreation: '1+3', result });
});

app.get('/power', (req, res) => {
  const result = mathUtil.power(2, 3);
  res.json({ Power: '2^3 ', result });
});

app.listen(port, () => {
  console.log(`Project1 is runnng on http://localhost:${port}`);
});
