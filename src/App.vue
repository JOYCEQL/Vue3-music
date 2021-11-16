<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2021-11-16 20:24:36
 * @LastEditors: yuguangzhou
 * @Description:
-->
<template>
  <Header></Header>
  <!-- <tab></tab> -->
  <router-view :style="viewStyle">
  </router-view >
  <!-- 播放器 -->
  <tab-bar v-if="$route.meta.showFoot!==false"></tab-bar>
  <player></player>
</template>
<script>
import Header from '@/components/header/Header'

// import Tab from '@/components/tab/Tab'
import Player from '@/components/player/Player'
import TabBar from '@/components/base/TabBar'

import { mapState } from 'vuex'
export default {
  components: {
    Header,
    // Tab,
    Player,
    TabBar
  },
  computed: {
    // 设置视图距离底部的位置
    viewStyle () {
      const bottom = this.playList.length ? '110px' : '0'
      return {
        bottom
      }
    },
    ...mapState([
      'playList'
    ])
  },
  created () {
  }

}
</script>

<style lang="scss" scoped>
</style>
