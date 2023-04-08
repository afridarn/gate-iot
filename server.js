const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 443;

const app = express();

// Middleware untuk meng-parse body request dalam format x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Endpoint '/masuk'
app.post('/masuk', (req, res) => {
  // Mendapatkan nilai parameter 'id' dari body request
  const id = req.body.id;
  
  // Cek apakah nilai parameter sama dengan 4263621817789128
  if (id === '4263621817789128') {
    res.send('1');
  } else {
    res.send('0');
  }
});

// Jalankan server pada port 3000
app.listen(port, () => console.log('Server running on port 3000'));
