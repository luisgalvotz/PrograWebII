const express = require('express');
const router = express.Router();

const ofertaIntercambio_controller = require('../controllers/ofertasIntercambioController');

//OFERTAS RUTAS
//router.post("/agregarOferta", ofertaIntercambio_controller.oferta_agregar); //AGREGAR OFERTA A LISTA
//router.get("/ofertaOpciones", ofertaIntercambio_controller.oferta_opciones); //ACEPTAR O NEGAR OFERTA
//router.post("/mostrarOfertas", ofertaIntercambio_controller.oferta__getAll); //TRAER TODAS LAS OFERTAS
//router.post("/mostrarOferta", ofertaIntercambio_controller.oferta_getById); //TRAER INFO DE UNA OFERTA INDIVIDUAL


module.exports = router;