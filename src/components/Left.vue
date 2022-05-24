<!--
 * @Description: 
 * @Author: lanchao
 * @Date: 2022-05-20 17:02:45
 * @LastEditTime: 2022-05-24 19:20:23
 * @LastEditors: lanchao
 * @Reference: 
-->
<template>
  <div class="left">
    <el-tree :data="tvList" :props="defaultProps" @node-click="handleClick" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
interface TvList {
  label: string
  src: string
}

export default class LeftComponent extends Vue {
  defaultProps = {
    label: 'label'
  }
  tvList: TvList[] = [
    {
      label: 'CCTV-1',
      src: 'http://stream10.fjtv.net/cctv1/hd/live.m3u8?_upt=be506a7d1653390945'
    },
    {
      label: '山东卫视',
      src: 'https://livealone302.iqilu.com/iqilu/sdtv5678.m3u8'
    },
    {
      label: '河北卫视',
      src: 'https://tv.pull.hebtv.com/jishi/weishipindao.m3u8'
    },
    {
      label: '山东齐鲁',
      src: 'https://livealone302.iqilu.com/iqilu/qlpd5678.m3u8'
    },
    {
      label: '山东农科',
      src: 'https://livealone302.iqilu.com/iqilu/nkpd5678.m3u8'
    },
    {
      label: '山东新闻',
      src: 'https://livealone302.iqilu.com/iqilu/ggpd5678.m3u8'
    },
    {
      label: '山东少儿',
      src: 'https://livealone302.iqilu.com/iqilu/sepd5678.m3u8'
    }
  ]
  handleClick = (data: any) => {
    this.$emit('setList', data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
