const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello World! Your Node.js app is officially running.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is happily listening at http://localhost:${PORT}`);
});
