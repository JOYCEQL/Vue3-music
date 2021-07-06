<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-20 11:57:24
 * @LastEditTime: 2021-07-05 21:18:36
 * @LastEditors: yuguangzhou
 * @Description:歌手
-->
<template>
  <div class="singer">
    <index-list :data="singerList" v-loading="!singerList.length" @select="selectSinger"></index-list>
    <router-view></router-view>
  </div>
</template>

<script>
import IndexList from '@/components/index-list/IndexList'
import { getSingerList } from '@/api/singer.js'
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
    top: 88px;
    bottom: 0;
  }
</style>
