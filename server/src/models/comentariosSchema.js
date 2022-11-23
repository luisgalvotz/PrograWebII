const mongoose = require('mongoose');

const ComentariosSchema = mongoose.Schema({
    contenido: {
        type: String,
        required: [true, 'No puede dejar el campo vacío'],
        minlength: [4, 'Favor de usar mínimo 4 caracteres'],
        maxlenght: [400, 'Favor de usar máximo 400 caracteres']
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now
    },
    estatus: {
        type: String,
        required: true,
        default: "pendiente"
    }
});

const Comentarios = mongoose.model("comentarios", ComentariosSchema);

module.exports = Comentarios;