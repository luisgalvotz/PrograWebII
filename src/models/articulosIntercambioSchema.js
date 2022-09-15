const mongoose = require('mongoose');

const ArticulosIntercambioSchema = mongoose.Schema({
    idArticulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articulos"
    }],
    deseos: {
        type: String,
        minlength: 4,
        maxlenght: 1000,
        required: true
    },
    estatus: {
        type: String,
        default: "alta"
    }
});

const ArticuloIntercambio = mongoose.model("articuloIntercambios", ArticulosIntercambioSchema);

module.exports = ArticuloIntercambio;