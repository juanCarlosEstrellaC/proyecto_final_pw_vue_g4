import axios from "axios"

const actualizarRetiro =async (nReserva)=> {
    const data=axios.put(`http://localhost:8082/API/v1.0/Renta/reservas/retiro?numeroReserva=${nReserva}`).then(r=>r.data);
    console.log(data);
}

const consultarReserva= async (nReserva)=> {

    
   const data= axios.get(`http://localhost:8082/API/v1.0/Renta/reservas/${nReserva}`).then(r => r.data);
    console.log(data);
   return data;
}
export const actualizarRetiroFachada=async(nReserva)=>{
    await actualizarRetiro(nReserva);
}

export const consultarReservaFachada=async(nReserva)=>{
    return await consultarReserva(nReserva);
}