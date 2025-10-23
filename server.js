const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Nombre del proyecto en Angular
const PROJECT_NAME = 'audio-pecs-app';

// Directorio donde Angular guarda los archivos estáticos
const BUILD_PATH = path.join(__dirname, 'dist', PROJECT_NAME, 'browser');

// Sirve los archivos estáticos de Angular
app.use(express.static(BUILD_PATH));

// Ruta catch-all para manejar las rutas de Angular (deep linking)
app.get('/*', (req, res) => {
  res.sendFile(path.join(BUILD_PATH, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});