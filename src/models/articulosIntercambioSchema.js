const mongoose = require('mongoose');

const ArticulosIntercambioSchema = mongoose.Schema({
    sugerencias: {
        type: String,
        minlength: 4,
        maxlenght: 400,
        required: true
    },
    estatus: {
        type: String,
        default: "activo"
    },
    id_articulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articulos"
    }]
});

const ArticuloIntercambio = mongoose.model("articuloIntercambios", ArticulosIntercambioSchema);

module.exports = ArticuloIntercambio;