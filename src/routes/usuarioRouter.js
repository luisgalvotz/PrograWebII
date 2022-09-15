const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuarioController');

router.post("/crearUsuario", usuario_controller.usuario_crear);

module.exports = router;