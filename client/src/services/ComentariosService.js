import { AxiosConfig as axios } from "./AxiosConfig";

//CREAR COMENTARIO
export const comentarios_crear = async (comentario) => {
    try {
      const response = await axios.post("/comentarios/crear", comentario);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //VER COMENTARIOS PENDIENTES
  export const comentarios_ver = async () => {
    try {
        const response = await axios.get("/comentarios/ver");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//DAR CLICK EN COMENTARIO YA REVISADO 
export const comentarios_revisar = async (id) => {
    try {
        const response = await axios.post("/comentarios/revisar",id);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//TRAER LOS DATOS DEL REPORTE DE comentarios
//AQUI NO ESTOY SEGURA DE LA RUTA!!!!!!!!!!!!!!!!