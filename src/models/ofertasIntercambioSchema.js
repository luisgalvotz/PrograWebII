const mongoose = require('mongoose');

const OfertasIntercambioSchema = mongoose.Schema({
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
    imagenes: {
        type: Array,
        required: true
    },
    estatus: {
        type: String,
        default: "pendiente",
        requiered: true
    },
    idArticulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articuloIntercambios"
    }],
    id_usuario: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    id_articulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articuloIntercambios"
    }],
});

const OfertasIntercambio = mongoose.model("ofertasIntercambio", OfertasIntercambioSchema);

module.exports = OfertasIntercambio;