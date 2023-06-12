
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 用户数据持久化注册
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import '@/mock/index'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(createPinia())
app.use(router)

app.mount('#app')