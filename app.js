const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});