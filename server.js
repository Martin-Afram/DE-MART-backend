const express = require('express');

const app = express();

const port = 5000;

// Test route
app.get('/', (req, res) => {
  res.send('DE-MART Ghana Emergency Transport Backend is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});