const mongoose = require('mongoose');

const EtiquetasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'No puede dejar el campo vacío'],
        unique: [true, 'Nombre de etiqueta ya utilizado'],
        minlength: [2, 'Favor de usar mínimo 2 caracteres'],
        maxlenght: [20, 'Favor de usar máximo 20 caracteres']
    },
    estatus: {
        type: String,
        required: true,
        default: "activo"
    }
});

const Etiquetas = mongoose.model("etiquetas", EtiquetasSchema);

module.exports = Etiquetas;