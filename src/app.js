const PORT = process.env.PORT || 3000;
const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/architech', (req, res) => {
    res.send('Hello architech.')
});

app.listen(PORT, () => {
    console.log('server is up on port: ' + PORT)
});