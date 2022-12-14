const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        default: "B"
    },
    nombre: {
        type: String,
        required: [true, 'Falta llenar campo nombre'],
        minlength: [1, 'Favor de usar minimo 4 caracteres -nombre'],
        maxlenght: [80, 'Favor de usar maximo 80 caracteres -nombre']
    },
    telefono: {
        type: Number,
        //required: [true, 'Falta llenar campo telefono'],
        length: [10,'Se necesitan 10 caracteres'],
        validate: {
            validator: function(v) {
              return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          }
    },
    fecha_nac: {
        type: String,
        //required: [true, 'Favor de ingresar la fecha de nacimiento']
    },
    email: {
        type: String,
        unique: true,
        required: [true,'Favor de ingresar el email'],
        minlength: [4, 'Favor de usar minimo 4 caracteres -email'],
        maxlenght: [80, 'Favor de usar maximo 8 caracteres -email'],
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
    },
    contrasena: {
        type: String,
        //required: true,
        minlength: [4, 'Favor de usar minimo 4 caracteres -contraseña'],
        maxlenght: [20, 'Favor de usar maximo 20 caracteres -contraseña'],
    },
    fotografia: {
        type: String,
        //required:[true, 'Favor de ingresar la fotografia']
    },
    estatus: {
        type: String,
        default: "activo"
    }
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;