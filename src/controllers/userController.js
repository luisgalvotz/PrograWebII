const User = require('../models/userSchema');

exports.user_create = async(req, res) => {
    const {body : user} = req;

    const userDB = new User(user);

    await userDB.save().catch((err) => console.log("Error", err));

    res.send({
        message: "Usuario creado",
        data: userDB
    });
};