<!--
 * @Author: yuguangzhou
 * @Date: 2021-07-05 20:41:32
 * @LastEditTime: 2021-08-08 15:55:26
 * @LastEditors: yuguangzhou
 * @Description:歌手详情
-->
<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic"> </music-list>
  </div>
</template>

<script>
import MusicList from '@/components/music-list/MusicList'
import { getSingerDetail } from '@/api/singer'
import { processSongs } from '@/api/song'
import { getSessionstorgae } from '@/utils/storage'
export default {
  name: 'SingerDetail',
  props: {
    singer: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    MusicList
  },
  data () {
    return {
      songs: []
    }
  },
  created () {
    this.getData()
  },
  mounted () {},
  methods: {
    async getData () {
      const res = await getSingerDetail(this.$route.params.id)
      this.songs = await processSongs(res.songs)
    }
  },
  computed: {
    computedData () {
      let retData = null
      const data = this.singer
      if (data) {
        retData = data
      } else {
        retData = getSessionstorgae('singer')
      }
      return retData
    },
    title () {
      const data = this.computedData
      return data && data.name
    },
    pic () {
      const data = this.computedData
      return data && data.pic
    }
  }
}
</script>

<style scoped lang="scss">
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
