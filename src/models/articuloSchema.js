const mongoose = require('mongoose');

const ArticuloSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 5,
        maxlenght: 50
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 400
    },
    notas: {
        type: String,
        required: true,
        maxlenght: 400
    },
    idUsuario: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    imagenes: {
        type: String
    },
    etiquetas: {
        type: Array,
        required: true
    },
    estatus: {
        type: String,
        default: "activo"
    }
});

const Articulo = mongoose.model("articulos", ArticuloSchema);

module.exports = Articulo;