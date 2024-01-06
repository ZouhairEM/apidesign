import express from 'express';
import path from 'path';
import router from './router';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  req.shhh_secret = 'doggy'
  next()
})

app.use('/api',  router)

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

