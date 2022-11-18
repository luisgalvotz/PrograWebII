//CONEXION A LO QUE SE NECESITA
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 3001;
require('./src/models/connection');

//CONEXIONES A LOS ROUTERS
const usuario_router = require('./src/routes/usuarioRouter');
const articulo_router = require('./src/routes/articuloRouter');
const articuloVenta_router = require('./src/routes/articuloVentaRouter');
const articuloIntercambio_router = require('./src/routes/articuloIntercambioRouter');
const ofertaIntercambio_router = require('./src/routes/ofertasIntercambioRouter');
const resenas_router = require('./src/routes/resenasRouter');
const wishlist_router = require('./src/routes/wishlistRouter');
const likes_router = require('./src/routes/likesRouter');
const comentarios_router = require('./src/routes/comentariosRouter');
const etiquetas_router = require('./src/routes/etiquetasRouter');

app.use(cors());
app.use(bodyParser.json());

//ruta principal
app.get('/', (req, res) => {
    res.send("Api is running");
}); 

// USUARIOS 
app.use('/usuario', usuario_router);

//ARTICULOS
app.use('/articulo',articulo_router);
app.use('/articuloVenta',articuloVenta_router);
app.use('/articuloIntercambio',articuloIntercambio_router);

//OFERTAS
app.use('/oferta',ofertaIntercambio_router);

//RESEÑAS
app.use('/resenas', resenas_router);

//WISHLIST
app.use('/wishlist', wishlist_router);

//LIKES
app.use('/likes', likes_router);

//COMENTARIOS
app.use('/comentarios', comentarios_router);

//ETIQUETAS
app.use('/etiquetas', etiquetas_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
});



