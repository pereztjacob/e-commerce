const express = require('express');
const app = express();
const morgan = require('morgan');
require('./models/register-plugins');

const auth = require('./routes/auth');
import users  from './routes/users';
const payment = require('./routes/payment');

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static('public'));

app.use('/api/auth', auth);
app.use('/api/users', users);
// app.use('/api/payment/charge', (req, res) => res.send('string'));
app.use('/api/payment', payment);

app.use((req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.use((err, req, res, next)=>{
  return res.status(err.status || 500).json({
    error: err.message
  });
});

export default app;