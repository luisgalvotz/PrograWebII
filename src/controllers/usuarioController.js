const User = require('../models/usuarioSchema');

exports.usuario_crear = async(req, res) => {
    const {body : user} = req;

    const usuarioDB = new Usuario(usuario);

    await usuarioDB.save().catch((err) => console.log("Error", err));

    res.send({
        message: "Usuario creado",
        data: usuarioDB
    });
};