const Oferta = require('../models/ofertasIntercambioSchema');
const Articulo = require('../models/articuloSchema');
const ArticuloIntercambio = require('../models/articulosIntercambioSchema');


//AGREGAR OFERTA A LA LISTA DE PROPUESTAS,es decir, crear la oferta

exports.oferta_agregar = async (req, res) => {
    const {body : oferta} = req;
    console.log(oferta);

    const ofertaDB = new Oferta(oferta);

    try {
        await ofertaDB.save();

        res.send({
            message: "Oferta de intercambio creada",
            data: ofertaDB
        });

    } catch(err) {
        res.send("No se pudo crear la articula");
        console.log("error")
    }

};

//ACEPTAR OFERTA

exports.oferta_aceptar = async (req, res) => {
    
    const { body: oferta } = req;
  
    try {

      let ofertaDB = await Oferta.find({ _id: oferta._id }); //busca la oferta por el id
      if (ofertaDB) {
        //const { estatus } = articulo;
        const data = await Oferta.updateOne( //DA DE BAJA LA OFERTA 
          { _id: oferta._id }, 
          { estatus : "aceptado" , fecha : Date.now()} 
        );
        //ACTUALIZAR LA TABLA DE ARTICULOS EN INTERCAMBIO Y PONERLOS EN BAJA
        const data2 = await ArticuloIntercambio.updateOne(
          { id_articulo: oferta.id_articulo}, 
          { estatus : "baja" } 
        );
        //ACTUALIZAR EN LA TABLA DE ARTICULOS NORMAL QUE EL ARTICULO ESTA DADO DE BAJA
        const data3 = await Articulo.updateOne(
          { _id: oferta.id_articulo}, 
          { estatus : "baja" } 
        );

        res.send({ msg: "Oferta aceptada" });
      }else{
        res.send({ msg: "Algo fallo en la oferta" });
      }
  
    } catch (err) {
        res.send({ msg: "Error en la oferta" });
        console.log(err);
    }

  };

  //NEGAR OFERTA

  exports.oferta_negar = async (req, res) => {
    
    const { body: oferta } = req;
  
    try {

      let ofertaDB = await Oferta.find({ _id: oferta._id }); //busca la oferta por el id
      if (ofertaDB) {
        //const { estatus } = articulo;
        const data = await Oferta.updateOne(
          { _id: oferta._id }, 
          { estatus : "denegado" } 
        );
        res.send({ msg: "Oferta denegada" });
      }else{
        res.send({ msg: "Algo fallo en la oferta" });
      }
  
    } catch (err) {
        res.send({ msg: "Error en la oferta" });
        console.log(err);
    }

  };


  //MOSTRAR TODAS LAS OFERTAS DE TRUEQUE QUE TENGA EL USUARIO CONECTADO

  exports.oferta_getAll = async (req, res) => {
    //const {params: {id}} = req; //id del usuario logueado
    const {
      body: usuario
  } = req;
  console.log(req.body)
 
    try {                   
      const data = await Oferta.find({id_usuario : usuario._id , estatus : "pendiente"}  ) //FILTRAR POR USUARIO LOGUEADO Y SUS OFERTAS
        .populate({path : "id_usuario"});

      if (data){
          res.send({message: "todas las ofertas ",data});
      }else{
          res.send("No hay ofertas");
      }
    }catch (err){
      res.send({ msg: "Error en la oferta" });
      console.log(err);
  }
  
  };

  //MOSTRAR INFORMACION DE UNA SOLA OFERTA AL DAR CLICK

  exports.oferta_getById = async (req, res) => {
    const { params: { id }} = req; 
    
    try {
        const data = await Oferta.findOne({ _id: id }); 
        res.send(data);

    }catch(err){
        res.send('No se encontro la oferta');
    }
  
    
  };