import { AxiosConfig as axios } from "./AxiosConfig";

//AGREGAR OFERTA A LISTA DE OFERTAS 
export const oferta_agregar = async (oferta) => {
    try {
      const response = await axios.post("/oferta/agregarOferta", oferta);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //ACEPTAR OFERTA
  export const oferta_aceptar = async (oferta) => {
    try {
      const response = await axios.post("/oferta/ofertaAceptar", oferta);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //NEGAR OFERTA
  export const oferta_negar = async (oferta) => {
    try {
      const response = await axios.post("/oferta/ofertaNegar", oferta);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //TRAER TODAS LAS OFERTAS DE UN USUARIO EN ESPECIFICO
  export const oferta_getAll = async (usuario) => {
    try {
        const response = await axios.post("/oferta/mostrarOfertas",usuario);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//OFERTA INDIVIDUAL
export const oferta_getById = async (id) => {
    try {
        const response = await axios.get(`/oferta/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};