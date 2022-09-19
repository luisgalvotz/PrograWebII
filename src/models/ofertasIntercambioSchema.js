const mongoose = require('mongoose');

const OfertasIntercambioSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: [5,'Favor de usar minimo 5 caracteres'],
        maxlenght: [50, 'Favor de usar maximo 50 caracteres']
    },
    descripcion: {
        type: String,
        required: true,
        minlength: [4,'Favor de usar minimo 4 caracteres'],
        maxlenght: [400, 'Favor de usar maximo 400 caracteres']
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