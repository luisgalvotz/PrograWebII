const mongoose = require('mongoose');

const LikesSchema = mongoose.Schema({
    estatus: {
        type: String,
        required: true
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    id_articulo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "articulos"
    }
});

const Likes = mongoose.model("likes", LikesSchema);

module.exports = Likes;