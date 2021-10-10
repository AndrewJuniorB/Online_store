const express = require('express');

const app = express();
const PORT = 4200 || 3000;

app.listen(PORT, () => {
  console.log(`Express Server running on PORT ${PORT}...`);
})