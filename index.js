import express from 'express';
import jwt from 'jsonwebtoken';
console.log(jwt);
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
