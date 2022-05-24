/*
 * @Description:
 * @Author: lanchao
 * @Date: 2022-04-14 11:21:23
 * @LastEditTime: 2022-05-24 11:28:10
 * @LastEditors: lanchao
 * @Reference:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// import Videojs from 'video.js'
// import 'video.js/dist/video-js.css'
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
//app.config.globalProperties.$video = Videojs //全局挂载
