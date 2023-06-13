
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

//   这里要是app.use(pinia)；而不是app.use（create（pinia））否则pinia的持久化管理无法运行
app.use(pinia)
app.use(router)

app.mount('#app')

