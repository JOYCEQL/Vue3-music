<!--
 * @Author: yuguangzhou
 * @Date: 2021-08-13 14:44:55
 * @LastEditTime: 2021-08-13 15:22:57
 * @LastEditors: yuguangzhou
 * @Description: 底部标签栏
-->
<template>
  <div class="tab-bar">
      <van-tabbar route :border="false">
        <van-tabbar-item replace to="/recommend" icon="wap-home-o">推荐</van-tabbar-item>
        <van-tabbar-item replace to="/singer" icon="friends-o">歌手</van-tabbar-item>
        <van-tabbar-item replace to="/top-list" icon="bar-chart-o">排行</van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.van-tabbar{
  background-color: $color-background;
  .van-tabbar-item--active{
    background:transparent;
  }
}

</style>
