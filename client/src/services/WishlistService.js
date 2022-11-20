import { AxiosConfig as axios } from "./AxiosConfig";

//CREAR WISHLIST
export const wishlist_crear = async (wishlist) => {
    try {
      const response = await axios.post("/wishlist/crear", wishlist);
      
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };

  //AGREGAR PRODUCTO A WISHLIST
  //aqui no se como ponerlo porque dice put 

   //ELIMINAR PRODUCTO A WISHLIST
  //aqui no se como ponerlo porque dice put


  //VER WISHLIST DE USUARIO
  export const wishlist_ver = async (wishlist) => {
    try {
        const response = await axios.get(`/wishlist/ver/${wishlist}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};