const Likes = require('../models/likesSchema');

exports.likes_actualizar = async(req, res) => {
    const {body : like} = req;

    const likeDB = new Likes(like);

    try {
        let busqueda = await Likes.find({id_usuario: like.id_usuario, id_articulo: like.id_articulo});

        if (busqueda) {
            const data = await Likes.updateOne(
                {_id : busqueda._id}, 
                {estatus: like.estatus}
            );

            res.send({
                message: "Like actualizado",
                data: data
            });
        } 
        else {
            await likeDB.save();

            res.send({
                message: "Like creado",
                data: likeDB
            });
    
        }

    } catch(err) {
        res.send("No se pudo actualizar el like");
    }
};

exports.likes_ver = async(req, res) => {
    const {params: {id}} = req;

    const data = await Likes.find({id_articulo: id, estatus: "si"});

    let suma = 0;
    data.forEach((elemento) => {
        suma++;;
    });

    res.send({suma});
};

exports.likes_estatus = async(req, res) => {
    const {params: {id_usuario, id_articulo}} = req;

    const data = await Likes.find({id_usuario, id_articulo});

    if (data) {
        res.send({
            message: "Like existente",
            data: data
        });
    }
    else {
        res.send({
            message: "Aún no existe registro de like"
        });
    }
};

exports.likes_reporte = async(req, res) => {
    const data = await Likes.aggregate([
        {
            $group: {
                _id: "$id_articulo",
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