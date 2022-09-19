const express = require('express');
const router = express.Router();

const ofertaIntercambio_controller = require('../controllers/ofertasIntercambioController');

//OFERTAS RUTAS
router.post("/agregarOferta", ofertaIntercambio_controller.oferta_agregar); //AGREGAR OFERTA A LISTA
router.post("/ofertaAceptar", ofertaIntercambio_controller.oferta_aceptar); //ACEPTAR 
router.post("/ofertaNegar", ofertaIntercambio_controller.oferta_negar); //NEGAR OFERTA
router.get("/mostrarOfertas/:id", ofertaIntercambio_controller.oferta_getAll); //TRAER TODAS LAS OFERTAS
router.get("/:id", ofertaIntercambio_controller.oferta_getById); //TRAER INFO DE UNA OFERTA INDIVIDUAL


module.exports = router;