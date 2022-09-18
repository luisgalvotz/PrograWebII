const mongoose = require('mongoose');

const OfertaSchema = mongoose.Schema({

    idArticulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articuloIntercambios"
    }],
    imagenes: {
        type: Array,
        required: true
    },
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
    idUsuario: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    idArticulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articuloIntercambios"
    }],
    estatus: {
        type: String,
        default: "pendiente",
        requiered: true
    }
});

const Oferta = mongoose.model("ofertas", OfertaSchema);

module.exports = Oferta;