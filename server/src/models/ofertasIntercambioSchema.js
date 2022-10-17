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
    fecha:{
        type : Date
    },
    id_usuario: { //es el  usuario al que pertenece el articulo ofertado
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    id_articulo: { //articulo que esta siendo ofertado
        type: mongoose.Schema.Types.ObjectId,
        ref: "articuloIntercambios"
    },
    id_ofertante: { //es el usuario que esta haciendo la oferta del articulo
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }
});

const OfertasIntercambio = mongoose.model("ofertasIntercambio", OfertasIntercambioSchema);

module.exports = OfertasIntercambio;