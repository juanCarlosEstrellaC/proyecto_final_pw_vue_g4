import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import './css/styles.css'
import router from './router/router'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
createApp(App).use(router).use(PrimeVue).mount('#app')
