const Oferta = require('../models/ofertasIntercambioSchema');


//AGREGAR OFERTA A LA LISTA DE PROPUESTAS,es decir, crear la oferta

exports.oferta_agregar = async (req, res) => {
    const {body : oferta} = req;

    const ofertaDB = new Oferta(oferta);

    try {
        await ofertaDB.save();

        res.send({
            message: "Oferta de intercambio creada",
            data: ofertaDB
        });

    } catch(err) {
        res.send("No se pudo crear la articula");
    }

};

//ACEPTAR OFERTA

exports.oferta_aceptar = async (req, res) => {
    
    const { body: oferta } = req;
  
    try {

      let ofertaDB = await Oferta.find({ _id: oferta._id }); //busca la oferta por el id
      if (ofertaDB) {
        //const { estatus } = articulo;
        const data = await Articulo.updateOne(
          { _id: oferta._id }, 
          { estatus : "aceptado" } 
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
        const data = await Articulo.updateOne(
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
    const {params: {id}} = req; //id del usuario logueado
 
                                    
   const data = await Oferta.find({id_usuario : id }  ) //FILTRAR POR USUARIO LOGUEADO Y SUS OFERTAS
        .populate({path : "id_usuario"});

    if (data){
        res.send({message: "todas las ofertas ",data});
    }else{
        res.send("No hay ofertas");
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