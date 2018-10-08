import express from 'express';
const app = express();
import morgan from 'morgan';
import auth from './routes/auth';
import users  from './routes/users';
import payment from './routes/payment';
import router from './routes/router';

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static('public'));

app.use('/api/routerT', router);
app.use('/api/auth', auth);
app.use('/api/users', users);
// app.use('/api/payment/charge', (req, res) => res.send('string'));
app.use('/api/payment', payment);

app.use((req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.use((err, req, res/*, next*/)=>{
  return res.status(err.status || 500).json({
    error: err.message
  });
});

export default app;