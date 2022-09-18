const Resena = require('../models/resenasSchema');

exports.resenas_crear = async(req, res) => {
    const {body : resena} = req;

    const resenaDB = new Resena(resena);

    try {
        await resenaDB.save();

        res.send({
            message: "Reseña creada",
            data: resenaDB
        });

    } catch(err) {
        res.send("No se pudo crear la reseña");
    }
};

exports.resenas_ver = async(req, res) => {
    const {params: {id}} = req;

    const data = await Resena.find({id_vendedor : id})
        .populate({path : "id_vendedor", select: "nombre"})
        .populate({path : "id_usuario", select: "nombre"});

    res.send(data)
};

exports.resenas_promedio = async(req, res) => {
    const {params: {id}} = req;

    const data = await Resena.find({id_vendedor : id});

    let suma = 0;
    data.forEach((elemento) => {
        suma += elemento.estrellas;
    });
    const promedio = (suma / data.length).toFixed(2);

    res.send({promedio});
};

exports.resenas_reporte = async(req, res) => {
    const data = await Resena.find();

    res.send(data);
};