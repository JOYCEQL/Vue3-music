<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2021-08-18 16:05:28
 * @LastEditors: yuguangzhou
 * @Description:
-->
<template>
  <Header></Header>
  <!-- <tab></tab> -->
  <router-view>
  </router-view>
  <!-- 播放器 -->
  <tab-bar v-if="$route.meta.showFoot!==false"></tab-bar>
  <player></player>
</template>
<script>
import Header from '@/components/header/Header'

// import Tab from '@/components/tab/Tab'
import Player from '@/components/player/Player'
import TabBar from '@/components/base/TabBar'
export default {
  components: {
    Header,
    // Tab,
    Player,
    TabBar
  },
  created () {
  }

}
</script>

<style lang="sass" scoped>
</style>
