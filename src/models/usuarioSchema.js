const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 80,
        estatus: "activo"
    },
    telefono: {
        type: Number,
        required: true,
        length: 10
    },
    email: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 80
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    contrasenia: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 20
    },
    fotografia: {
        type: String
    },
    estatus: {
        type: String,
        default: "alta"
    }
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;