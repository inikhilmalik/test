const express = require('express'); // Import Express
const app = express(); // Initialize Express

// Define a basic route
app.get('/', (req, res) => {
    res.status(200).send("name's server");
});

const PORT = 8080; // Set the port to 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    // db.connect()
});
