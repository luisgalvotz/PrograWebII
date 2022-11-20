import { AxiosConfig as axios } from "./AxiosConfig";

//CREAR USUARIO 

export const usuario_crear = async (usuario) => {
    try {
      const response = await axios.post("/usuario/crearUsuario", usuario);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };


  //TRAER INFO DEL USUARIO A SU PAGINA DE PERFIL
  export const usuario_getById = async (id) => {
    try {
        const response = await axios.get(`/usuario/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//EDITAR PERFIL DEL USUARIO 

export const usuario_actualizar = async (usuario) => {
    try {
      const response = await axios.post("/usuario/actualizar", usuario);
      
      return "Actualizado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //DAR DE BAJA UN USUARIO

  export const usuario_baja = async (id) => {
    try {
        const response = await axios.post("/usuario/baja",id);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};