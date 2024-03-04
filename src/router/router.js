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
    path: '/empleados',
    component: () => import('../pages/Empleados.vue')
},
{
    path: '/rentar',
    component: () => import('../pages/VehiculoRentar.vue')
},
{
    path: '/principal',
    component: () => import('../pages/PaginaInicio.vue')
},
{
    path: '/not-found',
    name: 'NotFound',
    component: () => import('../pages/PageNotFound.vue')
  },

{
    path: '/',
    redirect: '/principal',
  },

   
]

// Configuro el router[c]:
const router = createRouter({history: createWebHashHistory(), routes})

router.beforeEach((to, from, next) => {
    if (!routes.some(route => route.path === to.path)) {
      next({ name: 'NotFound' });
    } else {
      next();
    }
  });

// Exporto la configuración:
export default router