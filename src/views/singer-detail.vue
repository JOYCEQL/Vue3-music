<!--
 * @Author: yuguangzhou
 * @Date: 2021-07-05 20:41:32
 * @LastEditTime: 2021-11-16 20:35:34
 * @LastEditors: yuguangzhou
 * @Description:歌手详情
-->
<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic"> </music-list>
  </div>
</template>

<script>
import { getSingerDetail } from '@/api/singer'
import { SINGER_KEY } from '@/assets/js/constant'
import createDetailComponent from '@/assets/js/create-detail'

export default createDetailComponent('SingerDetail', SINGER_KEY, getSingerDetail)

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
