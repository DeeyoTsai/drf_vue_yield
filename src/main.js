import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/lara-light-green/theme.css'
// import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css';
// import 'primevue/resources/themes/fluent-light/theme.css';
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Tooltip from 'primevue/tooltip';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import App from './App.vue'
import router from './router'
import axios from 'axios'

import VueApexCharts from "vue3-apexcharts";

// typical django server working at http://127.0.0.1:8000
axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App);

app.use(VueApexCharts);

app.component('Avatar',Avatar);
app.component('Menu',Menu);
app.directive('Tooltip',Tooltip);
app.component('Column',Column);
app.component('DataTable',DataTable);

app.use(createPinia());
app.use(router, axios, PrimeVue);

app.mount('#app')
