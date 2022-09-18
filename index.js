//CONEXION A LO QUE SE NECESITA
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
require('./src/models/connection');

//CONEXIONES A LOS ROUTERS
const user_router = require('./src/routes/userRouter');
const usuario_router = require('./src/routes/usuarioRouter');
const articulo_router = require('./src/routes/articuloRouter');
const articuloVenta_router = require('./src/routes/articuloVentaRouter');
const articuloIntercambio_router = require('./src/routes/articuloIntercambioRouter');
const ofertaIntercambio_router = require('./src/routes/ofertaIntercambioRouter');
const resenas_router = require('./src/routes/resenasRouter');

app.use(bodyParser.json());

//ruta principal
app.get('/', (req, res) => {
    res.send("Api is running");
}); 

//ruta user
app.use('/api', user_router);

// USUARIOS 
app.use('/usuario', usuario_router);

//ARTICULOS
//app.use('/articulo',articulo_router);
//app.use('/articuloVenta',articuloVenta_router);
///app.use('/articuloIntercambio',articuloIntercambio_router);

//OFERTAS
//app.use('/oferta',oferta_router);

//RESEÑAS
app.use('/resenas', resenas_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
});



