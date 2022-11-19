const Articulo = require('../models/articuloSchema');
const ArticuloVenta = require('../models/articulosVentaSchema');
const ArticuloIntercambio = require('../models/articulosIntercambioSchema');
const Oferta = require('../models/ofertasIntercambioSchema');

//CREAR ARTICULO 
exports.articulo_crear = async (req, res) => {
    const {
        body: articulo
    } = req;

    const articuloDB = new Articulo(articulo);

    try {
        await articuloDB.save();

        res.send({
            message: "Articulo creado",
            data: articuloDB
        });

    } catch (err) {
        res.send("No se pudo crear el articulo");
    }
};

//MOSTRAR TODOS LOS ARTICULOS EN GENERAL EN DASHBOARD
exports.articulo_getAll = async (req, res) => {

    //TRAE SOLO LOS DATOS ESPECIFICADOS PARA LAS MINIATURAS
    // const data = await Articulo.find({},{"titulo": 1,"imagenes":1, "_id" :0 }, );
    //filtra todos los articulos que esten activos, es decir, los que aun estan disponibles
    const data = await Articulo.find({
        estatus: "activo"
    }, {
        "titulo": 1,
        "imagenes": 1
    });
    if (data) {
        res.send({
            message: "todos los articulos",
            data
        });
    } else {
        res.send("No hay articulos");
    }
};

//BUSQUEDA POR ETIQUETAS DE UN ARTICULO

exports.busqueda = async (req, res) => {
    const {
        params: {
            etiquetas
        }
    } = req;
    //OBTENER EL PARAMETRO DEL REQUEST

    //EN EL PRIMER ESPACIO VA LAS ETIQUETAS QUE QUEREMOS COMPARAR

    const data = await Articulo.find({
        etiquetas: {
            $in: etiquetas
        }
    }); //GUARDA TODOS LOS ARTICULOS
    if (data) {
        res.send({
            message: "todos los articulos",
            data
        });
    } else {
        res.send("No hay articulos");
    }
};

//DAR DE BAJA ARTICULO EN LA BASE DE DATOS PORQUE SE VENDIO

exports.articulo_baja = async (req, res) => {

    const {
        body: articulo
    } = req;

    try {
        let articuloDB = await ArticuloVenta.find({
                id_articulo: articulo._id
            })
            .populate({
                path: "id_articulo",
                select: "titulo"
            });
        if (articuloDB) {
            //const { estatus } = articulo;
            //SE DA DE BAJA EN LOS ARTICULOS EN VENTA
            const data = await ArticuloVenta.updateOne({
                    id_articulo: articulo._id
                }, //filtro
                //TAMBIEN SE VA A ACTUALIZAR LA FECHA DEL ARTICULO AL SER VENDIDO
                {
                    estatus: "baja",
                    fecha: Date.now()
                } //los que se les dara update , en este caso en se daran de baja


            );
            //SE DA DE BAJA EN LA TABLA DE ARTICULOS PRINCIPALES
            const data2 = await Articulo.updateOne({
                    _id: articulo._id
                }, //filtro
                {
                    estatus: "baja"
                } //los que se les dara update , en este caso en se daran de baja


            );

            res.send({
                msg: "Articulo dado de baja"
            });
        } else {
            res.send({
                msg: "Articulo no encontrado"
            });
        }

    } catch (err) {
        res.send({
            msg: "Articulo no actualizado"
        });
        console.log(err);
    }
};

//ARTICULOS DE TIPO VENTA

//AGREGAR ARTICULO DE VENTA A TABLA DE VENTA 
exports.articuloVenta_agregar = async (req, res) => {
    const {
        body: articulo
    } = req;

    const articuloDB = new ArticuloVenta(articulo);

    try {
        await articuloDB.save();

        res.send({
            message: "Articulo de venta creado",
            data: articuloDB
        });

    } catch (err) {
        res.send("No se pudo crear el articulo");
    }
};

//MOSTRAR TODOS LOS ARTICULOS EN GENERAL DE VENTAS
exports.articuloVenta_getAll = async (req, res) => {

    // const data = await ArticuloVenta.find({id_articulo : id , estatus: "activo"}  )
    //    .populate({path : "id_articulo", select: "titulo"});

    const data = await ArticuloVenta.find({
        estatus: "activo"
    }).
    populate({
        path: "id_articulo",
        select: "titulo"
    });

    if (data) {
        res.send({
            message: "todos los articulos venta",
            data
        });
    } else {
        res.send("No hay articulos");
    }
};

//MOSTRAR ARTICULO DE VENTA EN ESPECIFICO 
exports.articuloVenta_getById = async (req, res) => {
    const {
        params: {
            id
        }
    } = req; //AQUI SACA EL PARAMETRO DEL REQUEST
    //id del articulo que hizo click que es el id del articuloVenta
    
    try {
        const data = await ArticuloVenta.findOne({
                id_articulo: id,
                estatus: "activo",
            })
            .populate({
                path: "id_articulo"
            });
        res.send(data);

    } catch (err) {
        res.send('No se encontro el articulo 2');
    }
};

//ARTICULOS EN INTERCAMBIO
exports.articuloIntercambio_agregar = async (req, res) => {
    const {
        body: articulo
    } = req;

    const articuloDB = new ArticuloIntercambio(articulo);

    try {
        await articuloDB.save();

        res.send({
            message: "Articulo de intercambio creado",
            data: articuloDB
        });

    } catch (err) {
        res.send("No se pudo crear el articulo");
    }

};

//MOSTRAR LOS QUE SON EXCLUSIVOS DE INTERCAMBIO

exports.articuloIntercambio_getAll = async (req, res) => {
    //const {params: {id}} = req;

    //va a traer la info de ese id de articulo
    const data = await ArticuloIntercambio.find({
            estatus: "activo"
        })
        .populate({
            path: "id_articulo",
            select: "titulo"
        });


    if (data) {
        res.send({
            message: "todos los articulos intercambio",
            data
        });
    } else {
        res.send("No hay articulos");
    }

};

//MOSTRAR INFO INDIVIDUAL DE ARTICULO DE INTERCAMBIO

exports.articuloIntercambio_getById = async (req, res) => {
    const {
        params: {
            id
        }
    } = req; //AQUI SACA EL PARAMETRO DEL REQUEST
    //id del articulo que hizo click que es el id del articuloVenta

    try {
        const data = await ArticuloIntercambio.findOne({
                _id: id,
                estatus: "activo",
            })
            .populate({
                path: "id_articulo"
            });
        res.send(data);

    } catch (err) {
        res.send('No se encontro el articulo');
    }


};

//REPORTE DE TRUEQUES

exports.articuloVenta_reporte = async (req, res) => {
    const data = await ArticuloVenta.aggregate([ //schema, como tablas dinamicas
        {
            $match: {
                estatus: "baja"
            }
        },
        {
            $group: { //funcion del aggregate, las agrupa en bae al paramerro
                //lo agrupa por año y por mes 
                _id: {
                    year: {
                        $year: "$fecha"
                    },
                    month: {
                        $month: "$fecha"
                    }
                },
                cantidad: {
                    $count: {}
                } //cuenta cuales se repiten
            }
        },
        {
            $sort: {
                "cantidad": -1
            }
        }
    ]);

    res.send(data);
};

exports.articuloIntercambio_reporte= async (req, res) => {
    const data = await Oferta.aggregate([ //schema, como tablas dinamicas
        {
            $match: {
                estatus: "aceptado"
            }
        },
        {
            $group: { //funcion del aggregate, las agrupa en bae al paramerro
                //lo agrupa por año y por mes 
                _id: {
                    year: {
                        $year: "$fecha"
                    },
                    month: {
                        $month: "$fecha"
                    }
                },
                cantidad: {
                    $count: {}
                } //cuenta cuales se repiten
            }
        },
        {
            $sort: {
                "cantidad": -1
            }
        }
    ]);

    res.send(data);
};