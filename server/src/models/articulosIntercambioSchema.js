const mongoose = require('mongoose');

const ArticulosIntercambioSchema = mongoose.Schema({
    sugerencias: {
        type: String,
        minlength: [4, 'Favor de usar minimo 4 caracteres'],
        maxlenght: [400, 'Favor de usat maximo 400 caracteres'],
        required: true
    },
    estatus: {
        type: String,
        default: "activo"
    },
    id_articulo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "articulos"
    }
});

const ArticuloIntercambio = mongoose.model("articuloIntercambios", ArticulosIntercambioSchema);

module.exports = ArticuloIntercambio;