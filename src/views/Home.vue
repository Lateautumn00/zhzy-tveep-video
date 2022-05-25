<!--
 * @Description: 
 * @Author: lanchao
 * @Date: 2022-05-20 10:27:49
 * @LastEditTime: 2022-05-25 15:02:56
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
        <el-aside width="200px">
          <LeftComponent @setList="setList" />
        </el-aside>
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
  isElectron = process.env.IS_ELECTRON
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
  padding: 0;
  border-bottom: 1px #dcdfe6 solid;
}
.el-container.is-vertical {
  height: 100vh;
}
.el-aside {
  border-right: 1px #dcdfe6 solid;
}
</style>
