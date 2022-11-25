import { AxiosConfig as axios } from "./AxiosConfig";

//DAR LIKE O QUITAR A UN ARTICULO
export const likes_actualizar = async (like) => {
    try {
        const response = await axios.post("/likes/actualizar",like);
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

export const likes_estatus = async (id_usuario, id_articulo) => {
    try {
        const response = await axios.get(`/likes/estatus/${id_usuario}/${id_articulo}`);
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//TRAER LOS DATOS DEL REPORTE DE LIKES
//AQUI NO ESTOY SEGURA DE LA RUTA!!!!!!!!!!!!!!!!