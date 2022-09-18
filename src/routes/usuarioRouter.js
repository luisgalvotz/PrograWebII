const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuarioController');

//USUARIO RUTAS
router.post("/crearUsuario", usuario_controller.usuario_crear); //CREAR USUARIO
router.get("/:id", usuario_controller.usuario_getById); //INFO DEL USUARIO EN SECCION PERFIL
router.put("/actualizar", usuario_controller.usuario_actualizar); //EDITAR INFO DEL USUARIO
router.post("/baja", usuario_controller.usuario_baja); //DAR DE BAJA PERFIL


module.exports = router;