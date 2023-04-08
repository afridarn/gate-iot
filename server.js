const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 443;
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.post('/masuk', (req, res) => {
  const id = req.body.id;
  
  if (id === '4263621817789128') {
    res.send('1');
  } else {
    res.send('0');
  }
});

app.listen(port, () => console.log('Server running on port 443'));
