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

/*
exports.comentarios_ver = async(req, res) => {
    const data = await Comentarios.find({estatus : "pendiente"})
        .populate({path : "id_usuario", select: "nombre"});

    res.send(data);
};*/
exports.comentarios_ver = async (req, res) => {

    const data = await Comentarios.find({
        
    }, {
        "contenido": 1,
        "estatus" :1,
        "_id": 1
    });
    if (data) {
        res.send({
            message: "todos los comentarios",
            data
        });
    } else {
        res.send("No hay comentarios");
    }
};


exports.comentarios_revisar = async(req, res) => {
    const {body : id} = req;
    console.log(id)
    const data = await Comentarios.updateOne(
        {_id : id.id}, 
        {estatus: "revisado"}
    );

    res.send({
        message: "Comentario revisado",
        data: data
    });
   

};

exports.comentarios_reporte = async(req, res) => {
    const data = await Comentarios.aggregate([ //schema, como tablas dinamicas
        {
            $group: {       //funcion del aggregate, las agrupa en bae al paramerro
                //lo agrupa por año y por mes 
                _id: { year: { $year: "$fecha" }, month: { $month: "$fecha" } }, 
                cantidad: { $count: {} } //cuenta cuales se repiten
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