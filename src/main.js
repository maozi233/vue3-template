import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installElement } from './utils/install-element'

const app = createApp(App)

app.use(router)
installElement(app)

app.mount('#app')
