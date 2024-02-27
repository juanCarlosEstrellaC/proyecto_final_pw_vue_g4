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
        component: () => import('../pages/EmpleadoRegistroCliente.vue')
    },
    {
        path: '/empleados/vehiculo',
        component: () => import('../pages/VehiculoPage.vue')
    },
    {
        path: '/empleados/vehiculo/ingreso',
        component: () => import('../pages/IngresoVehiculoPage.vue')
    },
    {
        path: '/empleados/vehiculo/busqueda',
        component: () => import('../pages/BusquedaVehiculoPage.vue')
    },
    {
        path: '/empleados/vehiculo/actualizar',
        component: () => import('../pages//ActualizarVehiculoPage.vue')
    },
    {
        path: '/empleado/reserva',
        component: () => import('../pages/ReservaPage.vue')
    }
]

// Configuro el router[c]:
const router = createRouter({history: createWebHashHistory(), routes})

// Exporto la configuración:
export default router