import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:wwwwww@cluster0.7nouj.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => {
    console.log('DB err', err);
  });
//
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.post('/auth/login', (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: 'stepGT',
    },
    'key',
  );
  res.json({
    success: true,
    token,
  });
});
app.listen(4444, (err) => {
  if (err) console.log(err);
  console.log('OK SERVER');
});
