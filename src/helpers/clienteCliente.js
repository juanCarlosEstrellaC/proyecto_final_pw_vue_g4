import axios from "axios";

const consultar = async (id) => {
    const info = axios.get(`http://localhost:8082/API/v1.0/Renta/clientes/${id}`).then(r => r.data)
    console.log(info);
    return info;
}
const insertar = async (body) => {
    const info = axios.post(`http://localhost:8082/API/v1.0/Renta/clientes`, body).then(r => r.data)
    console.log(info);
}
const actualizar = async (id, body) => {
    const info = axios.put(`http://localhost:8082/API/v1.0/Renta/clientes/${id}`, body).then(r => r.data)
    console.log(info);
}
const eliminar = async (id) => {
    const info = axios.delete(`http://localhost:8082/API/v1.0/Renta/clientes/${id}`).then(r => r.data)
    console.log(info);
}

// Métodos Fachada:
export const consultarClienteFachada = async (id) => {
    return await consultar(id);
}
export const insertarClienteFachada = async (body) => {
    //return await insertar(body);
}
export const actualizarClienteFachada = async (id, body) => {
    //return await actualizar(id, body);
}
export const eliminarClienteFachada = async (id) => {
    return await eliminar(id);
}