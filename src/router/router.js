import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
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
        path: '/empleados',
        component: () => import('../pages/Empleados.vue')
    }
]

// Configuro el router[c]:
const router = createRouter({history: createWebHashHistory(), routes})

// Exporto la configuración:
export default router