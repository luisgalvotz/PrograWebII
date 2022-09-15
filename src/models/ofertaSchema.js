const mongoose = require('mongoose');

const OfertaSchema = mongoose.Schema({

    idArticulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articuloIntercambios"
    }],
    imagen: {
        type: String,
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
        maxlenght: 1000
    },
    idAceptante: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    idOferente: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    estatus: {
        type: String,
        default: "pendiente",
        requiered: true
    }
});

const Oferta = mongoose.model("ofertas", OfertaSchema);

module.exports = Oferta;