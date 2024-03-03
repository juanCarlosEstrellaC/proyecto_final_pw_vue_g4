import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

    {
        path: '/Empleado/retiro', 
        component: ()=> import('../pages/EmpleadoRetirarPage.vue')
    },

  
    
    {
        path: '/reporte',
        component: ()=> import('@/pages/ReportePage.vue')
    }
  

   
]

const router = createRouter({history: createWebHashHistory(),routes } ) 

export default router 