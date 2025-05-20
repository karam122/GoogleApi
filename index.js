const express = require('express');
const app = express();
const PORT = 8000;

const googleMapHandler = require('./api/googleMapApi'); // adjust path if needed

app.get('/api/google-map', (req, res) => {
  googleMapHandler(req, res);
});

app.listen(PORT, () => {
  console.log(`App is live on port ${PORT}`);
});
