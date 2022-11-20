import { AxiosConfig as axios } from "./AxiosConfig";

//CREAR ETIQUETA
export const etiquetas_crear = async (etiqueta) => {
    try {
      const response = await axios.post("/etiquetas/crear", etiqueta);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //VER ETIQUETAS
  export const etiquetas_ver = async () => {
    try {
        const response = await axios.get("/etiquetas/ver");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//ELIMINAR ETIQUETAS
export const etiquetas_eliminar = async (id) => {
    try {
        const response = await axios.post("/etiquetas/eliminar",id);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//TRAER LOS DATOS DEL REPORTE DE ETIQUETAS
//AQUI NO ESTOY SEGURA DE LA RUTA!!!!!!!!!!!!!!!!