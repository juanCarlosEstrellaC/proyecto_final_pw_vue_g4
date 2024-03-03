import axios from "axios"


//-------------------------------------------------------------------------------
// Insertar Cliente desde Empleado
const insertarEmpleadoCliente = async(body)=>{

const data = axios.post(`http://localhost:8082/API/v1.0/Renta/empleados`,body).then(r=>r.data);
console.log(data);

}


export const insertarEmpleadoClienteFachada = async (body) => {

    return await insertarEmpleadoCliente(body);
}

//-------------------------------------------------------------------------------
// Buscar Cliente desde Empleado
//http://localhost:8082/API/v1.0/Renta/empleados/buscarCliente?apellido=
const consultarEmpleadoCliente = async(val)=>{
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/buscarCliente?apellido=${val}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoClienteFachada = async (val) =>{

    return await consultarEmpleadoCliente(val);

}

// Buscar Cliente desde Empleado por cedula
const consultarEmpleadoClienteCedula = async(val)=>{
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/${val}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoClienteCedulaFachada = async (val) =>{

    return await consultarEmpleadoClienteCedula(val);

}

//-------------------------------------------------------------------------------
// Actualizar Cliente desde Empleado
const actualizarEmpleadoCliente = async(id, body)=>{
    const data = axios.put(`http://localhost:8082/API/v1.0/Renta/empleados/${id}`,body).then(r=>r.data);
    console.log(data);

}
export const actualizarEmpleadoClienteFachada = async (id, body) => {

    return await actualizarEmpleadoCliente(id,body);
}

//-------------------------------------------------------------------------------
// Eliminar Cliente desde Empleado
const eliminarEmpleadoCliente = async(id)=>{
    const data = axios.delete(`http://localhost:8082/API/v1.0/Renta/empleados/${id}`).then(r=>r.data);
    console.log(data);

}
export const eliminarEmpleadoClienteFachada = async (id) => {

    return await eliminarEmpleadoCliente(id);
}




//-------------------------------------------------------------------------------
// Insertar vehiculo desde Empleado
const insertarEmpleadoVehiculo = async(body)=>{

const data = axios.post(`http://localhost:8082/API/v1.0/Renta/empleados/insertarVehiculo`,body).then(r=>r.data);
console.log(data);

}


export const insertarEmpleadoVehiculoFachada = async (body) => {

    return await insertarEmpleadoVehiculo(body);
}



//-------------------------------------------------------------------------------
// Buscar vehiculo desde Empleado
//http://localhost:8082/API/v1.0/Renta/empleados/buscarCliente?apellido=
const consultarEmpleadoVehiculo = async(val)=>{
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/buscarVehiculo?marca=${val}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoVehiculoFachada = async (val) =>{

    return await consultarEmpleadoVehiculo(val);

}

//-------------------------------------------------------------------------------
// Eliminar vehiuclo desde Empleado
const eliminarEmpleadoVehiculo = async(id)=>{
    const data = axios.delete(`http://localhost:8082/API/v1.0/Renta/empleados/borrarVehiculo/${id}`).then(r=>r.data);
    console.log(data);

}
export const eliminarEmpleadoVehiculoFachada = async (id) => {

    return await eliminarEmpleadoVehiculo(id);
}


// Buscar vehiculo desde Empleado por placa
const consultarEmpleadoVehiculoPlaca = async(val)=>{
    const data = axios.get(`http://localhost:8082/API/v1.0/Renta/empleados/buscarVehiculo/${val}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const consultarEmpleadoVehiculoPlacaFachada = async (val) =>{

    return await consultarEmpleadoVehiculoPlaca(val);

}
//-------------------------------------------------------------------------------
// Actualizar Cliente desde Empleado
const actualizarEmpleadoVehiculo = async(id, body)=>{
    const data = axios.put(`http://localhost:8082/API/v1.0/Renta/empleados/actualizarVehiculo/${id}`,body).then(r=>r.data);
    console.log(data);

}
export const actualizarEmpleadoVehiculoFachada = async (id, body) => {

    return await actualizarEmpleadoVehiculo(id,body);
}
