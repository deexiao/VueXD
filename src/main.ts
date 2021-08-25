import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Deexiao from './components/Deexiao.vue'
import Deexiao2 from './components/Deexiao2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path: '/', component: Deexiao},
        {path: '/xxx', component: Deexiao2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
