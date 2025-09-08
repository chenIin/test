import { createApp } from 'vue'
import App from './App.vue'
import router from './router/views'  // 导入路由

const app = createApp(App)
app.use(router)  // 注册路由
app.mount('#app')


