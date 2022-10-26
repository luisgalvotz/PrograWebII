const mongoose = require('mongoose');

const WishlistSchema = mongoose.Schema({
    articulos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "articulos"
    }],
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    }
});

const Wishlist = mongoose.model("wishlist", WishlistSchema);

module.exports = Wishlist;