const Articulo = require('../models/articuloSchema');
//CREAR ARTICULO 
exports.articulo_crear = async (req, res) => {
    const {body : articulo} = req;

    const articuloDB = new Articulo(articulo);

    try {
        await articuloDB.save();

        res.send({
            message: "Articulo creado",
            data: articuloDB
        });

    } catch(err) {
        res.send("No se pudo crear el articulo");
    }

};

//MOSTRAR TODOS LOS ARTICULOS EN GENERAL EN DASHBOARD
exports.articulo_getAll = async (req, res) => {

    //TRAE SOLO LOS DATOS ESPECIFICADOS PARA LAS MINIATURAS
   // const data = await Articulo.find({},{"titulo": 1,"imagenes":1, "_id" :0 }, );
   const data = await Articulo.find({},{"titulo": 1,"imagenes":1} );
    if (data){
        res.send({message: "todos los articulos",data});
    }else{
        res.send("No hay articulos");
    }
  
  };

  //BUSQUEDA POR ETIQUETAS DE UN ARTICULO

  exports.busqueda= async (req, res) => {
    const {params: { etiquetas}} = req;
    //OBTENER EL PARAMETRO DEL REQUEST

    //EN EL PRIMER ESPACIO VA LAS ETIQUETAS QUE QUEREMOS COMPARAR
    
   const data = await Articulo.find({etiquetas:{$in :etiquetas}}); //GUARDA TODOS LOS ARTICULOS
    if (data){
        res.send({message: "todos los articulos",data});
    }else{
        res.send("No hay articulos");
    }
  
  };

  //hay que hacer una union de la tabla de articulos normales y una union con la 
  //de articulos en venta y de intercambio