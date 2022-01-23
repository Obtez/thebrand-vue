import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '@/assets/css/global.scss';

createApp(App).use(store).mount('#app');
