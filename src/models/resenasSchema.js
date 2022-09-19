const mongoose = require('mongoose');

const ResenaSchema = mongoose.Schema({
    contenido: {
        type: String,
        required: [true, 'No puede dejar el campo vacío'],
        minlength: [4, 'Favor de usar mínimo 4 caracteres'],
        maxlenght: [400, 'Favor de usar máximo 400 caracteres']
    },
    estrellas: {
        type: Number,
        required: [true, 'Favor de dejar una calificación'],
        min: 1,
        max: 5
    },
    id_vendedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
});

const Resena = mongoose.model("resenas", ResenaSchema);

module.exports = Resena;