const mongoose = require('mongoose');

const ArticuloSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'Favor llenar campo titulo'],
        minlength: [5, 'Favor de usar minimo 5 caracteres -titulo'],
        maxlenght: [50, 'Favor de usar maximo 50 caracteres -titulo']
    },
    descripcion: {
        type: String,
        required: [true, 'Favor llenar campo descripcion'],
        minlength: [4, 'Favor de usar minimo 4 caracteres -descripcion'],
        maxlenght: [400, 'Favor de usar maximo 400 caracteres -descripcion'],
    },
    notas: {
        type: String,
        required: [true, 'Favor llenar campo notas'],
        maxlenght: [400, 'Favor de usar maximo 400 caracteres -notas']
    },
    imagenes: {
        type: String
    },
    etiquetas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "etiquetas"
    },
    estatus: {
        type: String,
        default: "activo"
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    tipo: {
        type: String
    }
});

ArticuloSchema.methods.setImgUrl = function setImgUrl (filename) {
    this.imagenes = `http://localhost:3001/public/${filename}`
}

const Articulo = mongoose.model("articulos", ArticuloSchema);

module.exports = Articulo;