const mongoose = require('mongoose');

const ResenaSchema = mongoose.Schema({
    contenido: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 400
    },
    estrellas: {
        type: Number,
        required: true,
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