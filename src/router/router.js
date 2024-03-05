import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    
    {
        path: '/',
        component: () => import('../pages/PaginaInicio.vue')
    },
    {
        path: '/empleados/reportes',
        component: () => import('../pages/ReportePage.vue')
    },
    {
        path: '/empleados',
        component: () => import('../pages/EmpleadoPage.vue')
    },
    {
        path: '/empleados/sinreserva',
        component: () => import('../pages/RetiroSinReservaPage.vue')
    },
    
    {
        path: '/empleados/clientes/registro',
        component: () => import('../pages/EmpleadoClienteRegistroPage.vue')
    },
    {
        path: '/empleados/clientes/busqueda',
        component: () => import('../pages/EmpleadoClienteBusquedaPage.vue')
    },
    {
        path: '/empleados/clientes/visualizar/:cedula',
        name: 'VisualizarCliente',
        component: () => import('../pages/EmpleadoClienteVisualizarPage.vue')
    },
    {
        path: '/empleados/clientes/actualizar/:id',
        name: 'ActualizarCliente',
        component: () => import('../pages/EmpleadoClienteActualizarPage.vue')
    },
   
    {
        path: '/empleados/vehiculo/ingreso',
        component: () => import('../pages/EmpleadoVehiculoIngresoPage.vue')
    },
    {
        path: '/empleados/vehiculo/busqueda',
        component: () => import('../pages/EmpleadoVehiculoBusquedaPage.vue')
    },
    {
        path: '/empleados/vehiculo/visualizar/:placa',
        name : 'VisualizarVehiculo',
        component: () => import('../pages/EmpleadoVehiculoVisualizarPage.vue')
    },
    
    {
        path: '/empleados/vehiculo/actualizar/:id',
        name : 'ActualizarVehiculo',
        component: () => import('../pages/EmpleadoVehiculoActualizarPage.vue')
    },
   


{ 
path: '/empleado/reserva/retiro',
component: () => import('../pages/EmpleadoRetirarPage.vue')
},
{
    path: '/registro',
    component: () => import('../pages/ClienteRegistro.vue')
},
{
    path: '/actualizar',
    component: () => import('../pages/ClienteActualizar.vue')
},
{
    path: '/renta',
    component: () => import('../pages/ClienteRentar.vue')
},
{
    path: '/clientes',
    component: () => import('../pages/Clientes.vue')
},
{
    path: '/rentar',
    component: () => import('../pages/VehiculoRentar.vue')
},
{
    path: '/rentarGlobal',
    component: () => import('../pages/RetiroSinReservaPage.vue')

},{
    path: '/empleados/rentar',
    component: () => import('../pages/EmpleadoRentar.vue')

},




{
    path: '/:pathMatch(.*)*',

    component: ()=> import('../pages/NoFoundPage')
},
{
    path: '/cliente/reserva',

    component: ()=> import('../pages/ClienteReserva')
}
]

// Configuro el router[c]:
const router = createRouter({history: createWebHashHistory(), routes})

// Exporto la configuración:
export default router