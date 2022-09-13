const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PROGRAWEBII', {useNewUrlParser: true})
    .then(() => console.log("Conectado a la base de datos MongoDB"))
    .catch(() => {
        console.log("No se pudo conectar con la base de datos");
        process.exit();
    });