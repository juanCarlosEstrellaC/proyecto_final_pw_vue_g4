import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    
    {
        path: '/empleados',
        component: () => import('../pages/EmpleadoPage.vue')
    },
    {
        path: '/empleados/clientes',
        component: () => import('../pages/EmpleadoClientesPage.vue')
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
        path: '/empleados/vehiculo',
        component: () => import('../pages/EmpleadoVehiculoPage.vue')
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
        path: '/empleado/reserva',
        component: () => import('../pages/EmpleadoReservaPage.vue')
    },
    {
        path: '/empleado/reserva/retiro/codigo',
        component: () => import('../pages/EmpleadoReservaRetiroCodigoPage.vue')
    }
]

// Configuro el router[c]:
const router = createRouter({history: createWebHashHistory(), routes})

// Exporto la configuración:
export default router