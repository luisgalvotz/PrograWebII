const Comentarios = require('../models/comentariosSchema');

exports.comentarios_crear = async(req, res) => {
    const {body : comentario} = req;

    const comentarioDB = new Comentarios(comentario);

    try {
        await comentarioDB.save();

        res.send({
            message: "Comentario creado",
            data: comentarioDB
        });

    } catch(err) {
        res.send("No se pudo crear el comentario");
    }
};

exports.comentarios_ver = async(req, res) => {
    const data = await Comentarios.find({estatus : "pendiente"})
        .populate({path : "id_usuario", select: "nombre"});

    res.send(data);
};

exports.comentarios_revisar = async(req, res) => {
    const {body : id} = req;

    const data = await Comentarios.updateOne(
        {_id : id}, 
        {estatus: "revisado"}
    );

    res.send({
        message: "Comentario revisado",
        data: data
    });
};

exports.comentarios_reporte = async(req, res) => {
    const data = await Comentarios.aggregate([
        {
            $group: {
                _id: { year: "$fecha.year", month: "$fecha.month" }, 
                cantidad: { $count: {} }
            }
        }, 
        { 
            $sort : {
                "cantidad" : -1
            }
        }
    ]);

    res.send(data);
};