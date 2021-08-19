import { createApp } from 'vue'
import App from './App.vue'
import RayPlugin from 'vue-ray';


const app = createApp(App);

app.use(RayPlugin, { interceptErrors: true, host: '127.0.0.1', port: 23517 }).mount('#app');