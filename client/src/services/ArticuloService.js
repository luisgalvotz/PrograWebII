//aqui se hacen las peticiones al backend
import { AxiosConfig as axios } from "./AxiosConfig";

export const articulo_getAll = async () => {
    try {
        const response = await axios.get("/articulo/articulos");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};