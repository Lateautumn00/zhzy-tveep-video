<!--
 * @Description: 
 * @Author: lanchao
 * @Date: 2022-05-20 17:02:45
 * @LastEditTime: 2022-05-25 16:40:38
 * @LastEditors: lanchao
 * @Reference: 
-->
<template>
  <div class="left">
    <!--选择本地文件-->
    <el-upload
      class="upload-demo"
      :on-change="handleChange"
      :on-preview="handlePreview"
      :file-list="fileList"
      action=""
      :auto-upload="false"
      accept=".mp4"
      :show-file-list="false"
    >
      <el-button type="primary">选择本地视频</el-button>
    </el-upload>
    <!--电视直播-->
    <el-tree
      :data="tvList"
      highlight-current
      default-expand-all
      :props="defaultProps"
      @node-click="handleClick"
      node-key="id"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span v-if="data.isRemove && selectId !== data.id">
            <el-tooltip
              class="box-item"
              effect="dark"
              content="删除"
              placement="bottom-end"
            >
              <el-icon @click="remove(node, data)"><Remove /></el-icon>
            </el-tooltip>
          </span>
          <span>{{ data.name }}</span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import tvList from '../config/tvList'
interface TvList {
  id: number
  level: number //级别 0 根 1 子
  name: string //视频名字
  src?: string //地址
  isRemove: boolean //是否显示删除按钮
  children?: TvList[] //子
}
interface File {
  id: number
  name: string
  src: string
  level: number
  isRemove: boolean //是否显示删除按钮
}
export default class LeftComponent extends Vue {
  //电视直播
  id = 20000 //初始id
  selectId = 0 //当前选中的id
  defaultProps = {
    id: 'id',
    name: 'name',
    level: 'level',
    children: 'children'
  }
  fileList: File[] = [] //本地视频
  tvList: TvList[] = [
    {
      id: 20000,
      name: '本地视频',
      level: 0,
      isRemove: false,
      children: this.fileList
    },
    {
      id: 10000,
      name: '电视直播',
      level: 0,
      isRemove: false,
      children: tvList
    }
  ]
  handleClick = (data: any) => {
    this.selectId = data.id > 20000 ? data.id : 0
    if (data.level === 1) this.$emit('setList', data)
  }
  //本地视频
  handleChange = (uploadFile: any) => {
    this.id += 1
    const data: File = {
      id: this.id,
      name: uploadFile.raw.name,
      level: 1,
      isRemove: true,
      src: uploadFile.raw.path
    }
    this.$emit('setList', data)
    this.fileList.push(data)
    this.selectId = this.id
  }
  handlePreview(uploadFile: any) {
    this.$emit('setList', uploadFile)
  }
  remove(node: any, data: any) {
    const index = this.fileList.findIndex((d) => d.id === data.id)
    this.fileList.splice(index, 1)
    // this.$emit('setList', { name: '', src: '' }) //删除后要清除
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
