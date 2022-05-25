/*
 * @Description: 直播视频源配置
 * @Author: lanchao
 * @Date: 2022-05-25 10:18:15
 * @LastEditTime: 2022-05-25 15:31:05
 * @LastEditors: lanchao
 * @Reference:
 */
interface TvList {
  id: number
  name: string
  level: number
  src: string
  isRemove: boolean //是否显示删除按钮
}
const tvList: TvList[] = [
  {
    id: 10001,
    name: '山东卫视',
    level: 1,
    isRemove: false,
    src: 'https://livealone302.iqilu.com/iqilu/sdtv5678.m3u8'
  },
  {
    id: 10002,
    name: '河北卫视',
    level: 1,
    isRemove: false,
    src: 'https://tv.pull.hebtv.com/jishi/weishipindao.m3u8'
  },
  {
    id: 10003,
    name: '山东齐鲁',
    level: 1,
    isRemove: false,
    src: 'https://livealone302.iqilu.com/iqilu/qlpd5678.m3u8'
  },
  {
    id: 10004,
    name: '山东农科',
    level: 1,
    isRemove: false,
    src: 'https://livealone302.iqilu.com/iqilu/nkpd5678.m3u8'
  },
  {
    id: 10005,
    name: '山东新闻',
    level: 1,
    isRemove: false,
    src: 'https://livealone302.iqilu.com/iqilu/ggpd5678.m3u8'
  },
  {
    id: 10006,
    name: '山东少儿',
    level: 1,
    isRemove: false,
    src: 'https://livealone302.iqilu.com/iqilu/sepd5678.m3u8'
  }
]
export default tvList
