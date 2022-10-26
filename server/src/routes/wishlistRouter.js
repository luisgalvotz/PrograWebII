const express = require('express');
const router = express.Router();

const wishlist_controller = require('../controllers/wishlistController');

//WISHLIST RUTAS
router.post("/crear", wishlist_controller.wishlist_crear); //CREAR WISHLIST
router.put("/agregar", wishlist_controller.wishlist_agregar); //AGREGAR PRODUCTO
router.put("/eliminar", wishlist_controller.wishlist_eliminar); //ELIMINAR PRODUCTO
router.get("/ver/:id", wishlist_controller.wishlist_ver); //VER WISHLIST DE USUARIO

module.exports = router;