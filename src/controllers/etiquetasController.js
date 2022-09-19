const Etiquetas = require('../models/etiquetasSchema');
const Articulos = require('../models/articuloSchema');

exports.etiquetas_crear = async(req, res) => {
    const {body : etiqueta} = req;

    const etiquetaDB = new Etiquetas(etiqueta);

    try {
        await etiquetaDB.save();

        res.send({
            message: "Etiqueta creada",
            data: etiquetaDB
        });

    } catch(err) {
        res.send("No se pudo crear la etiqueta");
    }
};

exports.etiquetas_ver = async(req, res) => {
    const data = await Etiquetas.find({estatus : "activo"});

    res.send(data);
};

exports.etiquetas_eliminar = async(req, res) => {
    const {body : _id} = req;

    const data = await Etiquetas.updateOne(
        {_id : _id}, 
        {estatus: "baja"}
    );

    res.send({
        message: "Etiqueta eliminada",
        data: data
    });
};

exports.etiquetas_reporte = async(req, res) => {
    const data = await Articulos.aggregate([
        {
            $unwind : "$etiquetas"
        }, 
        {
            $group: {
                _id: "$etiquetas",
                cantidad: { $count: {} }
            }
        },
        {
            $lookup: {
                from: 'etiquetas',
                localField: '_id',
                foreignField: '_id',
                as: 'etiqueta'
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