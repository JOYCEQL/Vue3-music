<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-20 11:57:24
 * @LastEditTime: 2021-11-16 20:50:59
 * @LastEditors: yuguangzhou
 * @Description:歌手
-->
<template>
  <div class="singer">
    <index-list
      :data="singerList"
      v-loading="!singerList.length"
      @select="selectSinger"
    ></index-list>
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :data="selectedSinger" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import IndexList from '@/components/index-list/IndexList'
import { getSingerList } from '@/api/singer'
import { setStorage } from '@/utils/storage'
import { SINGER_KEY } from '@/assets/js/constant'
export default {
  name: 'Singer',
  components: { IndexList },
  data () {
    return {
      singerList: [],
      selectedSinger: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      const res = await getSingerList()
      this.singerList = res.singers
    },
    selectSinger (singer) {
      this.selectedSinger = singer

      // 缓存歌手信息对象
      setStorage(SINGER_KEY, singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 0;
}
</style>
