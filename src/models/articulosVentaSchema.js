const mongoose = require('mongoose');

const ArticulosVentaSchema = mongoose.Schema({
    idArticulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articulos"
    }],
    precio: {
        type: Double,
        required: true
    },
    estatus: {
        type: String,
        default: "alta"
    }
});

const ArticuloVenta = mongoose.model("articuloVentas", ArticulosVentaSchema);

module.exports = ArticuloVenta;