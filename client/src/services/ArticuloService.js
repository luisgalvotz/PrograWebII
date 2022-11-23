//aqui se hacen las peticiones al backend
import { AxiosConfig as axios } from "./AxiosConfig";

//TRAER TODOS LOS ARTICULOS
export const articulo_getAll = async () => {
    try {
        const response = await axios.get("/articulo/articulos");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//TRAER LA INFORMACION INDIVIDUAL DE LOS ARTICULOS DE TIPO VENTA
export const articuloVenta_getById = async (id) => {
    try {
        const response = await axios.get(`/articuloVenta/articuloVentaId/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//TRAER LA INFORMACION INDIVIDUAL DE LOS ARTICULOS DE TIPO INTERCAMBIO
export const articuloIntercambio_getById = async (id) => {
    try {
        const response = await axios.get(`/articuloIntercambio/articuloIntercambioId/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    } 
};

//TRAER TODOS LOS ARTICULOS QUE SON DE TIPO VENTA
export const articuloVenta_getAll = async () => {
    try {
        const response = await axios.get("/articuloVenta/articulosVenta");
        return response.data;
    } catch (err) { 
        console.error(err);
        return [];
    }
};

//TRAER TODOS LOS ARTICULOS QUE SON DE TIPO INTERCAMBIO
export const articuloIntercambio_getAll = async () => {
    try {
        const response = await axios.get("/articuloIntercambio/articulosIntercambio");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

// CREAR ARTICULO DE TIPO VENTA
export const articulo_crear = async (articulo) => {
    try {
      const response = await axios.post("/articulo/crearArticulo", articulo);
      return response.data;
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  // AGREGAR A LA LISTA DE VENTA UN ARTICULO
  export const articuloVenta_agregar = async (articulo) => {
    try {
      const response = await axios.post("/articuloVenta/agregarArticuloVenta", articulo);
      return response;
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //AGREGAR A LA LISTA DE INTERCAMBIO UN ARTICULO

   export const articuloIntercambio_agregar = async (articulo) => {
    try {
      const response = await axios.post("/articuloIntercambio/agregarArticuloIntercambio", articulo);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //CHECAR BIEN AQUI QUE ONDA
  //BUSCA EL ARTICULO POR ETIQUETAS
  export const busqueda = async (etiqueta) => {
    try {
        const response = await axios.get(`/articulo/busqueda/${etiqueta}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//DAR DE BAJA UN ARTICULO
//(ESTO SE HARA CUANDO SE LE DE A COMPRAR A ESE BOTON)
//SACA EL ID DEL PRODUCTO DEL URL

export const articulo_baja = async (id) => {
    try {
        const response = await axios.post("/articulo/baja",id);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//TRAER LOS DATOS DEL REPORTE DE INTERCAMBIOS
//AQUI NO ESTOY SEGURA DE LA RUTA!!!!!!!!!!!!!!!!!


//TRAER LOS DATOS DEL REPORTE DE VENTA
//AQUI NO ESTOY SEGURA DE LA RUTA!!!!!!!!!!!!!!!!

