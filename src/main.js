import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/lara-light-green/theme.css'
// import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css';
// import 'primevue/resources/themes/fluent-light/theme.css';


import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Tooltip from 'primevue/tooltip';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';
import ColumnGroup from 'primevue/columngroup';
// Glass_data test
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Tag from 'primevue/tag';
import Dropdown from 'primevue/dropdown';
import ProgressBar from 'primevue/progressbar';
import Slider from 'primevue/slider';
// GalleryImg
import Galleria from 'primevue/galleria';

// Toast
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


import App from './App.vue'
import router from './router'
import axios from 'axios'

import VueApexCharts from "vue3-apexcharts";

// typical django server working at http://127.0.0.1:8000
axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App);

app.use(VueApexCharts);

app.use(createPinia());
app.use(router, axios);
app.use(PrimeVue,{ ripple: true });
app.use(ToastService);

app.component('Avatar',Avatar);
app.component('Menu',Menu);
app.directive('Tooltip',Tooltip);
app.component('Column',Column);
app.component('Row',Row);
app.component('ColumnGroup', ColumnGroup);
app.component('DataTable',DataTable);
app.component('MultiSelect',MultiSelect);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Calendar', Calendar);
app.component('Tag', Tag);
app.component('Dropdown', Dropdown);
app.component('ProgressBar', ProgressBar);
app.component('Slider', Slider);
app.component('Galleria', Galleria);
app.component('Toast', Toast);

app.mount('#app')
