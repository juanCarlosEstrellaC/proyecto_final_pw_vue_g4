import axios from "axios";

// Consultar Cliente por Cédula:
const consultarClientePorCedula = async (cedula) => {
    const info = axios.get(`http://localhost:8082/API/v1.0/Renta/clientes/${cedula}`).then(r => r.data)
    console.log(info);
    return info;
}

// Guardar Cliente:
const guardarCliente = async (body) => {
    try {
        const response = await axios.post(`http://localhost:8082/API/v1.0/Renta/clientes`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Actualizar Cliente Parcial (Sin cédula): 
const actualizarClienteParcial = async (id, body) => {
    const info = axios.patch(`http://localhost:8082/API/v1.0/Renta/clientes/${id}`, body).then(r => r.data)
    console.log(info);
}


// METODOS FACHADA:
export const consultarClientePorCIFachada = async (id) => {
    return await consultarClientePorCedula(id);
}

export const insertarClienteFachada = async (body) => {
    try {
        const response = await guardarCliente(body);
        return response;
    } catch (error) {
        throw error;
    }
}

export const actualizarClienteParcialFachada = async (id, body) => {
    return await actualizarClienteParcial(id, body);
}


//-------------------------------------------------------------------------------
// Vehiculo
const consultarVehiculoPorMarcaYModelo = async (marca, modelo) => {
    const info = await axios.get(`http://localhost:8082/API/v1.0/Renta/vehiculos/buscarAutos?marca=${marca}&modelo=${modelo}`).then(r => r.data)
    console.log("helper: ",info);
    return info;
}
export const consultarVehiculoPorMarcaYModeloFachada = async (marca, modelo) => {
    return await consultarVehiculoPorMarcaYModelo(marca, modelo);
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