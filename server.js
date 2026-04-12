const express = require('express');
const app = express();

// Render usa este puerto automáticamente
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 Aplicación desplegada en Render</h1>
        <p>Funciona correctamente</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});