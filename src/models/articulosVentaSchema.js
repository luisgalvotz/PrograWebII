const mongoose = require('mongoose');

const ArticulosVentaSchema = mongoose.Schema({
    precio: {
        type: Number,
        required: [true, 'Favor llenar campo precio']
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

const ArticuloVenta = mongoose.model("articuloVentas", ArticulosVentaSchema);

module.exports = ArticuloVenta;