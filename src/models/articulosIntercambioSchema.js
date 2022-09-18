const mongoose = require('mongoose');

const ArticulosIntercambioSchema = mongoose.Schema({
    idArticulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articulos"
    }],
    sugerencias: {
        type: String,
        minlength: 4,
        maxlenght: 400,
        required: true
    },
    estatus: {
        type: String,
        default: "activo"
    }
});

const ArticuloIntercambio = mongoose.model("articuloIntercambios", ArticulosIntercambioSchema);

module.exports = ArticuloIntercambio;