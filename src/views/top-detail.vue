<!--
 * @Author: yuguangzhou
 * @Date: 2021-09-06 15:55:11
 * @LastEditTime: 2021-11-20 13:26:22
 * @LastEditors: yuguangzhou
 * @Description: 排行榜详情
-->
<template>
 <div class="top-detail">
      <music-list
      :songs="songs"
      :title="title"
      :pic="pic"
       rank
      :loading="loading"
    ></music-list>
 </div>
</template>

<script>
import { getTopDetail } from '@/api/top-list'
import createDetailComponent from '@/assets/js/create-detail'
import { TOP_KEY } from '@/assets/js/constant'

export default createDetailComponent('TopDetail', TOP_KEY, getTopDetail)
</script>

<style scoped lang = "scss">
  .top-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
