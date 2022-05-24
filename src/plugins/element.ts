/*
 * @Description:
 * @Author: lanchao
 * @Date: 2022-05-24 10:20:02
 * @LastEditTime: 2022-05-24 11:02:48
 * @LastEditors: lanchao
 * @Reference:
 */
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/index.css'

export default (app: any) => {
  app.use(ElementPlus)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
