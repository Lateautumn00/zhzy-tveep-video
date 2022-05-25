<!--
 * @Description: 
 * @Author: lanchao
 * @Date: 2022-05-20 17:14:09
 * @LastEditTime: 2022-05-25 16:35:30
 * @LastEditors: lanchao
 * @Reference: 
-->
<template>
  <div class="right">
    <video
      id="my-video"
      class="video-js vjs-default-skin"
      width="100%"
      height="100%"
    >
      <!-- <source src="" type="application/x-mpegURL" /> -->
    </video>
    <div class="text" v-if="text !== ''">
      正在观看{{ name }} ,状态:{{ text }}...
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import Videojs from 'video.js'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'
export default class RightComponent extends Vue {
  text = ''
  name = ''
  suffix = '' //后缀
  mounted() {
    this.$nextTick(function () {
      this.getVideo()
    })
  }
  player(data: any) {
    let myVideo = Videojs('my-video')
    let type = 'video/mp4'
    this.name = data.name
    if (data.src) {
      const srcArray = data.src.split('.')
      this.suffix = srcArray.pop().toLowerCase()
    }

    if (this.suffix === 'mp4') {
      type = 'video/mp4'
    } else if (this.suffix === 'm3u8') {
      type = 'application/x-mpegURL'
    } else {
      throw new Error('格式错误')
    }
    myVideo.src([
      {
        type: type,
        src: data.src
      }
    ])
    myVideo.play()
  }
  getVideo() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let _this = this
    Videojs(
      'my-video',
      {
        controls: true, ////确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        preload: 'auto', //建议浏览器是否应在<video>加载元素后立即开始下载视频数据
        autoplay: false, //自动播放属性
        bigPlayButton: false,
        aspectRatio: '16:9',
        controlBar: {
          playToggle: false,
          volumePanel: {
            inline: false
          }
        }
      },
      function onPlayerReady() {
        this.on('play', function () {
          _this.text = '开始播放'
          // console.log('开始播放')
        })
        this.on('pause', function () {
          _this.text = 'pause触发'
          //console.log('pause触发')
        })
        this.on('loadstart', function () {
          _this.text = '开始请求数据'
          // console.log('开始请求数据')
        })
        this.on('progress', function () {
          _this.text = '正在请求数据'
          //console.log('正在请求数据')
        })
        this.on('playing', function () {
          _this.text = '等待数据'
          //console.log('等待数据')
        })
        this.on('seeking', function () {
          _this.text = '寻找中'
          //console.log('寻找中')
        })
        this.on('seeked', function () {
          _this.text = '寻找结束'
          //console.log('寻找结束')
        })
        this.on('waiting', function () {
          _this.text = '等待数据，并非错误'
          //console.log('等待数据，并非错误')
        })
        this.on('stalled', function () {
          _this.text = '网速失速'
          //console.log('网速失速')
        })
        this.on('error', function () {
          _this.text = '请求数据时遇到错误'
          //console.log('请求数据时遇到错误')
        })
        this.on('ended', function () {
          _this.text = '播放结束'
          // console.log('播放结束')
        })
        this.on('ratechange', function () {
          _this.text = '播放速率改变'
          // console.log('播放速率改变')
        })
        this.on('durationchange', function () {
          _this.text = '资源长度改变'
          //console.log('资源长度改变')
        })
        this.on('volumechange', function () {
          _this.text = '音量改变'
          // console.log('音量改变')
        })
        this.on('loadedmetadata', function () {
          _this.text = '成功获取资源长度'
          // console.log('成功获取资源长度')
        })
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
  color: red;
}
</style>
