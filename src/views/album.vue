<!--
 * @Author: yuguangzhou
 * @Date: 2021-11-16 20:53:30
 * @LastEditTime: 2022-01-06 15:38:52
 * @LastEditors: yuguangzhou
 * @Description:
-->
<template>
  <div class="album">
    <music-list
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
    ></music-list>
  </div>
</template>

<script>
import { getAlbum } from '@/api/recommend'
import createDetailComponent from '@/assets/js/create-detail'
import { ALBUM_KEY } from '@/assets/js/constant'

export default createDetailComponent('Album', ALBUM_KEY, getAlbum)
</script>

<style lang="scss" scoped>
  .album {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--site-config-color-background);
  }
</style>
