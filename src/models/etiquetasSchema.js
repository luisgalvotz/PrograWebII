const mongoose = require('mongoose');

const EtiquetasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlenght: 20
    },
    estatus: {
        type: String,
        required: true
    }
});

const Etiquetas = mongoose.model("etiquetas", EtiquetasSchema);

module.exports = Etiquetas;