const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuarioController');

//USUARIO RUTAS
router.post("/crearUsuario", usuario_controller.usuario_crear); //CREAR USUARIO -LISTO
router.get("/:id", usuario_controller.usuario_getById); //INFO DEL USUARIO EN SECCION PERFIL -LISTO
router.put("/actualizar", usuario_controller.usuario_actualizar); //EDITAR INFO DEL USUARIO -LISTO
router.post("/baja", usuario_controller.usuario_baja); //DAR DE BAJA PERFIL -LISTO


module.exports = router;