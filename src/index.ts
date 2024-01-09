import express from 'express';
import router from './router';
import morgan from 'morgan';
import * as dotenv from 'dotenv' 
import { protect } from './modules/auth';
import { createUser, signin } from './handlers/user';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api',  protect, router);
app.post('/user', createUser);
app.post('/signin', signin)

// app.use((req, _, next) => {
//   req.shhh_secret = 'doggy'
//   next()
// })



app.listen(3000, () =>

  console.log('Example app listening on port 3000!'),
);

