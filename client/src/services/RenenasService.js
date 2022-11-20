import { AxiosConfig as axios } from "./AxiosConfig";

//CREAR RESEÑA
export const resenas_crear = async (resena) => {
    try {
      const response = await axios.post("/resenas/crear", resena);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //VER RESEÑAS DEL VENDEDOR
  export const resenas_ver = async (id) => {
    try {
        const response = await axios.get(`/resenas/ver/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//VER PROMEDIO DEL VENDEDOR
export const resenas_promedio = async (id) => {
    try {
        const response = await axios.get(`/resenas/promedio/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};


//TRAER LOS DATOS DEL REPORTE DE  RESEÑAS
//AQUI NO ESTOY SEGURA DE LA RUTA!!!!!!!!!!!!!!!!
