import axios from "axios";

const consultar = async (id) => {
    const info = axios.get(`http://localhost:8082/API/v1.0/Renta/clientes/${id}`).then(r => r.data)
    console.log(info);
    return info;
}

const consultarPorCedula = async (cedula) => {
    const info = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/${cedula}`).then(r => r.data)
    console.log(info);
    return info;
}
const consultarClientePorCedula = async (cedula) => {
    const info = axios.get(`http://localhost:8082/API/v1.0/Renta/clientes/${cedula}`).then(r => r.data)
    console.log(info);
    return info;
}

const insertar = async (body) => {
    try {
        const response = await axios.post(`http://localhost:8082/API/v1.0/Renta/clientes`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const actualizar = async (id, body) => {
    const info = axios.patch(`http://localhost:8082/API/v1.0/Renta/clientes/${id}`, body).then(r => r.data)
    console.log(info);
}
const eliminar = async (id) => {
    const info = axios.delete(`http://localhost:8082/API/v1.0/Renta/clientes/${id}`).then(r => r.data)
    console.log(info);
}

// METODOS FACHADA:
export const consultarClientePorCIFachada = async (id) => {
    return await consultarClientePorCedula(id);
}

export const consultarClienteFachada = async (id) => {
    return await consultar(id);
}

export const consultarClientePorCedulaFachada = async (cedula) => {
    return await consultarPorCedula(cedula);
}

export const insertarClienteFachada = async (body) => {
    try {
        const response = await insertar(body);
        return response;
    } catch (error) {
        throw error;
    }
}

export const actualizarClienteFachada = async (id, body) => {
    return await actualizar(id, body);
}
export const eliminarClienteFachada = async (id) => {
    return await eliminar(id);
}


//-------------------------------------------------------------------------------
// Vehiculo
const consultarVehi = async (marca, modelo) => {
    const info = await axios.get(`http://localhost:8082/API/v1.0/Renta/vehiculos/buscarAutos?marca=${marca}&modelo=${modelo}`).then(r => r.data)
    console.log("helper: ",info);
    return info;
}
export const consultarVehiFachada = async (marca, modelo) => {
    return await consultarVehi(marca, modelo);
}

//-------------------------------------------------------------------------------
// Renta:
const guardarRenta = async (body) => {
    try {
        const response = await axios.post(`http://localhost:8082/API/v1.0/Renta/clientes`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const guardarRentaFachada = async (body) => {
    try {
        const response = await guardarRenta(body);
        return response;
    } catch (error) {
        throw error;
    }
}