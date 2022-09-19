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
        console.log(err);
        
    }
    
};

//OBTENER LOS DATOS DEL USUARIO PARA EL PERFIL
exports.usuario_getById = async (req, res) => {
    const { params: { id }} = req; //AQUI SACA EL PARAMETRO DEL REQUEST
  
    
    try {
        const data = await Usuario.findOne({ _id: id });
        res.send(data);

    }catch(err){
        res.send('No se encontro al usuario');
    }
  
    
  };

//ACTUALIZAR DATOS DEL PERFIL DEL USUARIO
  exports.usuario_actualizar = async (req, res) => {
    
    const { body: usuario } = req;
  
    try {
      let usuarioDB = await Usuario.find({ _id: usuario._id }); //BUSCA EL USUARIO
      if (usuarioDB) {
        //variables que se van a editar 
        const { nombre, telefono, contrasena,fotografia } = usuario;
        const data = await Usuario.updateOne(
          { _id: usuario._id }, //filtro
          { nombre, telefono, contrasena,fotografia } //los que se les dara update 
        );
        res.send(data);
      }else{
        res.send({ msg: "Usuario no encontrado" });
      }
  
    } catch (err) {
        res.send({ msg: "Usuario no actualizado" });
        console.log(err);
      //console.log(err);
    }
  };
  
  //DAR DE BAJA USUARIO
  exports.usuario_baja = async (req, res) => {
    
    const { body: usuario } = req;
  
    try {
      let usuarioDB = await Usuario.find({ _id: usuario._id }); //BUSCA EL USUARIO
      if (usuarioDB) {
        //variables que se van a editar 
        //const { nombre, telefono, contrasena,fotografia } = usuario;
        const data = await Usuario.updateOne(
          { _id: usuario._id }, //filtro
          { estatus  } //los que se les dara update 
        );
        res.send({ msg: "Usuario dado de baja" });
      }else{
        res.send({ msg: "Usuario no encontrado" });
      }
  
    } catch (err) {
        res.send({ msg: "Usuario no actualizado" });
        console.log(err);
      //console.log(err);
    }
  };
  