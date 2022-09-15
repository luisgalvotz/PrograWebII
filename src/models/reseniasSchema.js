const mongoose = require('mongoose');

const ReseniaSchema = mongoose.Schema({


    descripcion: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 1000
    },
    estrellas: {
        type: Number,
        required: true
    },
    idvendedor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }],
    idusuario: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }]
});

const Resenia = mongoose.model("resenias", ReseniaSchema);

module.exports = Resenia;