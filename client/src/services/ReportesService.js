import { AxiosConfig as axios } from "./AxiosConfig";
//REPORTE DE VENTA DE ARTICULO
export const articuloVenta_reporte = async () => {
    try {
        const response = await axios.get("/articuloVenta/reporteVentas");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//REPORTE DE INTERCAMBIOS REALIZADOS
export const articuloIntercambio_reporte = async () => {
    try {
        const response = await axios.get("/articuloIntercambio/reporteIntercambios");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//REPORTE DE COMENTARIOS REALIZADOS
export const comentarios_reporte = async () => {
    try {
        const response = await axios.get("/comentarios/reporte");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//REPORTE DE ETIQUETAS
export const etiquetas_reporte = async () => {
    try {
        const response = await axios.get("/etiquetas/reporte");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//REPORTE DE RESENAS
export const resenas_reporte = async () => {
    try {
        const response = await axios.get("/resenas/reporte");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

//REPORTE DE LIKES
export const likes_reporte = async () => {
    try {
        const response = await axios.get("/likes/reporte");
        return response.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};