const Usuario = require('../models/usuarioSchema');


//CREAR USUARIO 
exports.usuario_crear = async(req, res) => {
    const {body : usuario} = req;  //En la variable usuario se esta almacenando lo que llega del request
    //en este caso es lo que vamos a pedir para llenar el usuario

    const usuarioDB = new Usuario(usuario); //crear un usuario con todos los parametros del schema
  
    try {
        await usuarioDB.save();
        res.send({
            message: "Usuario creado",
            data: usuarioDB
        });

    }catch(err){
        res.send('No se creo el usuario');
        
    }
    

    
};