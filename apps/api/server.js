const express = require('express');
const app = express();

// Route files
const azulRoute = require('./routes/azul');

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// Use routes
app.use('/azul', azulRoute);

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});