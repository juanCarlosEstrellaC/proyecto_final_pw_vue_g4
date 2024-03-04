import axios from "axios"


//-------------------------------------------------------------------------------
/// Insertar Cliente desde Empleado
const insertarEmpleadoCliente = async (body) => {


    try {
        const response = await axios.post(`http://localhost:8082/API/v1.0/Renta/empleados`, body);
        console.log("respuesta desde helpers para ingreso vehiculo: ", response);
        console.log("respuesta desde helpers para ingreso vehiculo: ", response.data);
        return response.data;
    } catch (error) {
        if (error.isAxiosError) {
            console.error("Error de Axios:", error.response.status, error.response.data);
        } else {
            console.error("Error general:", error.message);
        }
        throw error; // Re-lanzar el error para que el código que llamó a esta función también pueda manejarlo
    }
}

export const insertarEmpleadoClienteFachada = async (body) => {
    

    try {
        const response = await insertarEmpleadoCliente(body);
        return response;
    } catch (error) {
        if (error.response && error.response.status === 409) {
            // Manejar el conflicto (código de estado 409) de manera específica aquí, si es necesario
            console.error("Conflicto al insertar cliente:", error.response.data);
            return error.response.data;
        } else if(error.response && error.response.status === 400){
            console.error("Conflicto al insertar cliente:", error.response.data);
            return error.response.data;
        }             
        else
        
        {
            // Manejar otros errores de Axios o generales aquí
            console.error("Error al insertar cliente:", error.message);
        }
        throw error; // Re-lanzar el error para que el código que llamó a esta función también pueda manejarlo
    }
}

//-------------------------------------------------------------------------------
// Buscar Cliente desde Empleado
//http://localhost:8082/API/v1.0/Renta/empleados/buscarCliente?apellido=
const consultarEmpleadoCliente = async (val) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/buscarCliente?apellido=${val}`).then(r => r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoClienteFachada = async (val) => {

    return await consultarEmpleadoCliente(val);

}

// Buscar Cliente desde Empleado por cedula
const consultarEmpleadoClienteCedula = async (val) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/${val}`).then(r => r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoClienteCedulaFachada = async (val) => {

    return await consultarEmpleadoClienteCedula(val);

}

//-------------------------------------------------------------------------------
// Actualizar Cliente desde Empleado
const actualizarEmpleadoCliente = async (id, body) => {
    const data = axios.patch(`http://localhost:8082/API/v1.0/Renta/empleados/${id}`, body).then(r => r.data);
    console.log(data);

}
export const actualizarEmpleadoClienteFachada = async (id, body) => {

    return await actualizarEmpleadoCliente(id, body);
}

//-------------------------------------------------------------------------------
// Eliminar Cliente desde Empleado
const eliminarEmpleadoCliente = async (id) => {
    const data = axios.delete(`http://localhost:8082/API/v1.0/Renta/empleados/${id}`).then(r => r.data);
    console.log(data);

}
export const eliminarEmpleadoClienteFachada = async (id) => {

    return await eliminarEmpleadoCliente(id);
}





//-------------------------------------------------------------------------------
// Insertar vehiculo desde Empleado
const insertarEmpleadoVehiculo = async (body) => {
    try {
        const response = await axios.post(`http://localhost:8082/API/v1.0/Renta/empleados/insertarVehiculo`, body);
        console.log("respuesta desde helpers para ingreso vehiculo: ", response);
        console.log("respuesta desde helpers para ingreso vehiculo: ", response.data);
        return response.data;
    } catch (error) {
        if (error.isAxiosError) {
            console.error("Error de Axios:", error.response.status, error.response.data);
        } else {
            console.error("Error general:", error.message);
        }
        throw error; // Re-lanzar el error para que el código que llamó a esta función también pueda manejarlo
    }
};


export const insertarEmpleadoVehiculoFachada = async (body) => {

    try {
        const response = await insertarEmpleadoVehiculo(body);
        return response;
    } catch (error) {
        if (error.response && error.response.status === 409) {
            // Manejar el conflicto (código de estado 409) de manera específica aquí, si es necesario
            console.error("Conflicto al insertar vehículo:", error.response.data);
            return error.response.data;
        } else {
            // Manejar otros errores de Axios o generales aquí
            console.error("Error al insertar vehículo:", error.message);
        }
        throw error; // Re-lanzar el error para que el código que llamó a esta función también pueda manejarlo
    }
}



//-------------------------------------------------------------------------------
// Buscar vehiculo desde Empleado
//http://localhost:8082/API/v1.0/Renta/empleados/buscarCliente?apellido=
const consultarEmpleadoVehiculo = async (val) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/buscarVehiculo?marca=${val}`).then(r => r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoVehiculoFachada = async (val) => {

    return await consultarEmpleadoVehiculo(val);

}

//-------------------------------------------------------------------------------
// Eliminar vehiuclo desde Empleado
const eliminarEmpleadoVehiculo = async (id) => {
    const data = axios.delete(`http://localhost:8082/API/v1.0/Renta/empleados/borrarVehiculo/${id}`).then(r => r.data);
    console.log(data);

}
export const eliminarEmpleadoVehiculoFachada = async (id) => {

    return await eliminarEmpleadoVehiculo(id);
}


// Buscar vehiculo desde Empleado por placa
const consultarEmpleadoVehiculoPlaca = async (val) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/buscarVehiculo/${val}`).then(r => r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoVehiculoPlacaFachada = async (val) => {

    return await consultarEmpleadoVehiculoPlaca(val);

}
//-------------------------------------------------------------------------------
// Actualizar Cliente desde Empleado
const actualizarEmpleadoVehiculo = async (id, body) => {
    const data = axios.patch(`http://localhost:8082/API/v1.0/Renta/empleados/actualizarVehiculo/${id}`, body).then(r => r.data);
    console.log(data);


    

}
export const actualizarEmpleadoVehiculoFachada = async (id, body) => {

    return await actualizarEmpleadoVehiculo(id, body);
}
