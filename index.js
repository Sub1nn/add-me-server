import express from 'express';
const app = express();
const port = process.env.PORT;

app.get('/add', (req, res) => {
    const a = +req.query.a
    const b = +req.query.b
    const sum = a + b
  res.send(sum.toString());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});