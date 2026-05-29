require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./backend/db-connector'); 
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


app.get('/debug', (req, res) => {
    res.json({ 
        message: "Server is live", 
        directory: __dirname,
        pathExists: "Check terminal for ls results"
    });
});

/*
    LISTENER
*/

app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});