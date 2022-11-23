const express = require('express');
const router = express.Router();

const ofertaIntercambio_controller = require('../controllers/ofertasIntercambioController');

//OFERTAS RUTAS
router.post("/agregarOferta", ofertaIntercambio_controller.oferta_agregar); //AGREGAR OFERTA A LISTA -LISTO -SERVICE
router.post("/ofertaAceptar", ofertaIntercambio_controller.oferta_aceptar); //ACEPTAR  -LISTO -SERVICE
router.post("/ofertaNegar", ofertaIntercambio_controller.oferta_negar); //NEGAR OFERTA -LISTP -SERVICE
router.post("/mostrarOfertas", ofertaIntercambio_controller.oferta_getAll); //TRAER TODAS LAS OFERTAS-LISTO -SERVICE
router.get("/:id", ofertaIntercambio_controller.oferta_getById); //TRAER INFO DE UNA OFERTA INDIVIDUAL -LISTO -SERVICE


module.exports = router;