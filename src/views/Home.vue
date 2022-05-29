<!--
 * @Description: 
 * @Author: lanchao
 * @Date: 2022-05-20 10:27:49
 * @LastEditTime: 2022-05-29 11:45:48
 * @LastEditors: lanchao
 * @Reference: 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header v-if="isElectron">
        <HeaderComponent :name="name" />
      </el-header>
      <el-container>
        <el-aside :style="{ width: asideWidth + 'px', overflow: 'hidden' }">
          <LeftComponent @setList="setList" />
        </el-aside>
        <el-divider direction="vertical" border-style="solid" id="divider" />
        <el-main>
          <RightComponent ref="rightRef" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HeaderComponent from '@/components/Header.vue'
import LeftComponent from '@/components/Left.vue'
import RightComponent from '@/components/Right.vue'
@Options({
  components: {
    LeftComponent,
    HeaderComponent,
    RightComponent
  }
})
export default class HomeComponent extends Vue {
  name = ''
  maxWidth = 400 //最大宽度
  minWidth = 150 //最小宽度
  asideWidth = 200 //当前位置
  isElectron = process.env.IS_ELECTRON ? process.env.IS_ELECTRON : false
  mounted() {
    this.$nextTick(() => {
      const divider = document.getElementById('divider') as any
      this.mouseDownAndMove(divider)
    })
  }
  //鼠标按下并移动
  //方式一
  mouseDownAndMove(dom: any) {
    dom.onmousedown = (e: any) => {
      e = e || window.event
      e.preventDefault() //阻止默认操作
      document.onmousemove = this.mouseMove
      document.onmouseup = this.mouseUp
    }
  }
  //方式二
  //   mouseDownAndMove(dom: any) {
  //     dom.addEventListener('mousedown', (e: any) => {
  //       e = e || window.event
  //       e.preventDefault() //阻止默认操作
  //       //鼠标按下
  //       document.addEventListener('mousemove', this.mouseMove)
  //       document.addEventListener('mouseup', () => {
  //         document.removeEventListener('mousemove', this.mouseMove)
  //         document.removeEventListener('mouseup', () => {
  //           console.log(...arguments)
  //         })
  //       })
  //     })
  //   }

  //鼠标移动
  mouseMove(e: any) {
    e = e || window.event
    let w = this.asideWidth + e.movementX //左侧栏宽度
    if (w < this.minWidth) {
      console.error('宽度超下限')
      w = this.minWidth
    } else if (w > this.maxWidth) {
      console.error('宽度超上限')
      w = this.maxWidth
    }
    this.asideWidth = w
  }
  //鼠标抬起
  mouseUp() {
    document.onmousemove = null
    document.onmouseup = null
  }
  setList(data: any) {
    this.name = data.name
    ;(this.$refs.rightRef as any).player(data)
  }
}
</script>
<style scoped lang="scss">
.el-header {
  -webkit-app-region: drag; /**实现拖拽窗口 */
  --el-header-height: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  //justify-content: flex-end;
  border-bottom: 1px #dcdfe6 solid;
}
.el-container {
  height: 100vh;
}
.el-divider--vertical {
  height: auto;
  border-left: 1px #dcdfe6 solid;
  border-right: 1px #dcdfe6 solid;
  cursor: e-resize;
}
</style>
