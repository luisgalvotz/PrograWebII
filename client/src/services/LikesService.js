import { AxiosConfig as axios } from "./AxiosConfig";

//DAR LIKE O QUITAR A UN ARTICULO
export const likes_actualizar = async (id) => {
    try {
        const response = await axios.post("/likes/actualizar",id);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//VER CANTIDAD DE LIKES POR ARTICULO

export const likes_ver = async (id) => {
    try {
        const response = await axios.get(`/likes/ver/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//VER ESTATUS DE USUARIO-ARTICULO

export const likes_estatus = async (id,estatus) => {
    try {
        const response = await axios.get(`/likes/${id}/${estatus}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//TRAER LOS DATOS DEL REPORTE DE LIKES
//AQUI NO ESTOY SEGURA DE LA RUTA!!!!!!!!!!!!!!!!