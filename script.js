import express from 'express';

const app = express();
const port = 3000

//port&routing practice

app.get('/', (req, res) => {
  res.send('Hello world')
});

app.get('/dog', (req, res) => {
  res.send('Doggg')
});

app.get('/cat', (req, res) => {
  res.send('<h1>Catttt</h1>')
});

//request&response variables so we can save time (like every youtubers' url) using 'params'

app.get('/user/:name', (req, res) => {
  const q = req.params //basically, :id becomes 'params'
  console.log(q)
  res.json({'userId':q.name})
});
//:id is like parameter, can be anything in actual url, like /user/keith

//request&response using query method

// app.get('/user/:id', (req, res) => {
//   const q = req.query
//   console.log(q.q)
//   console.log(q.name)
//   res.json({'userId':q.q})
// });
//but just go with params...


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
