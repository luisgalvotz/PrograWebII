const mongoose = require('mongoose');

const ArticuloSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 1,
        maxlenght: 50
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 1,
        maxlenght: 1000
    },
    notas: {
        type: String,
        required: true,
        maxlenght: 500
    },
    idUsuario: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    imagenes: {
        type: String
    },
    tipo: {
        type: String,
        required: true,
    },
    etiquetas: {
        type: Array,
        required: true,
        
        minlength: 1,
        maxlenght: 100
    },
    estatus: {
        type: String,
        default: "alta"
    }
});

const Articulo = mongoose.model("articulos", ArticuloSchema);

module.exports = Articulo;