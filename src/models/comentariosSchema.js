const mongoose = require('mongoose');

const ComentariosSchema = mongoose.Schema({
    contenido: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 400
    },
    fecha: {
        type: Date,
        required: true
    },
    estatus: {
        type: String,
        required: true
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }
});

const Comentarios = mongoose.model("comentarios", ComentariosSchema);

module.exports = Comentarios;