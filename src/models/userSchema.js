const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nombre: {
        type: String
    },
    telefono: {
        type: Number
    },
    email: {
        type: String
    },
    fecha_nac: {
        type: String
    }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;