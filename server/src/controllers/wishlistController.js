const Wishlist = require('../models/wishlistSchema');

exports.wishlist_crear = async(req, res) => {
    const {body : wishlist} = req;

    const wishlistDB = new Wishlist(wishlist);

    try {
        await wishlistDB.save();

        res.send({
            message: "Wishlist creada",
            data: wishlistDB
        });

    } catch(err) {
        res.send("No se pudo crear la wishlist");
    }
};

exports.wishlist_agregar = async(req, res) => {
    const {body : wishlist} = req;

    try {
        const data = await Wishlist.updateOne(
            {id_usuario : wishlist.id_usuario}, 
            {$push : { articulos: wishlist.id_articulo }}
        );

        res.send(data);

    } catch(err) {
        res.send("Error al agregar articulo a la wishlist");
    }
};

exports.wishlist_eliminar = async(req, res) => {
    const {body : wishlist} = req;

    try {
        const data = await Wishlist.updateOne({id_usuario : wishlist.id_usuario}, 
            {$pull : { articulos: wishlist.id_articulo }});

        res.send(data);

    } catch(err) {
        res.send("Error al eliminar articulo de la wishlist");
    }
};

exports.wishlist_ver = async(req, res) => {
    const {params: {id}} = req;

    const data = await Wishlist.find({id_usuario : id})
        .populate({path : "id_usuario", select: "nombre"});

    res.send(data);
};