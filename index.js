//1. Importamos los módulos necesarios para la app
const express = require('express'); // para crear el back
const dotenv = require('dotenv'); // para cargar variables
const path = require('path'); // para manejar rutas de archivos

//2. Creamos una instancia de la aplicación Express
const app = express();

//3. Cargamos las variables de entorno
dotenv.config();

// 4. Creamos una ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


//5. Iniciamos el servidor en el puerto especificado en las variables de entorno
const PORT = process.env.PORT || 3000;


//6. Escuchamos en el puerto y mostramos un mensaje en la consola
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});