import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return next();
});

app.get('/', (req, res) => {
  res.send('up and running');
});

app.listen(8080, () => {
  console.log('https://localhost:8080');
});
