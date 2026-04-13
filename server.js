const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 👇 Esto sirve archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'tienda')));

// 👇 Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tienda', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});