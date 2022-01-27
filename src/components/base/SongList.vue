<!--
 * @Author: yuguangzhou
 * @Date: 2021-07-19 20:05:23
 * @LastEditTime: 2022-01-06 14:40:48
 * @LastEditors: yuguangzhou
 * @Description:歌曲列表
-->
<template>
  <ul class="song-list">
    <li
      class="item"
      v-for="(song, index) in songs"
      :key="song.id"
      @click="selectItem(song, index)"
    >
      <div class="rank" v-if="rank">
        <span :class="getRankCls(index)">{{ getRankText(index) }}</span>
      </div>
      <div class="content">
        <h2 class="name">{{song.name}}</h2>
        <p class="desc">{{getDesc(song)}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default () {
        return []
      }
    },
    rank: Boolean
  },
  emits: ['select'],
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    getDesc (song) {
      return `${song.singer}·${song.album}`
    },
    selectItem (song, index) {
      this.$emit('select', { song, index })
    },
    // 渲染排序
    getRankCls (index) {
      if (index <= 2) {
        return `icon icon${index}`
      } else {
        return 'text'
      }
    },
    getRankText (index) {
      if (index > 2) {
        return index + 1
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
  .song-list {
    .item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 64px;
      font-size: $font-size-medium;
      .rank {
        flex: 0 0 25px;
        width: 25px;
        margin-right: 20px;
        text-align: center;
        .icon {
          display: inline-block;
          width: 25px;
          height: 24px;
          background-size: 25px 24px;
          &.icon0 {
            @include top-image('first');
          }
          &.icon1 {
            @include top-image('second');
          }
          &.icon2 {
            @include top-image('third');
          }
        }
        .text {
          color: $color-theme;
          font-size: $font-size-large;
        }
      }
      .content {
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        .name {
          @include no-wrap();
          color: var(--site-config-color-text)
        }
        .desc {
          @include no-wrap();
          margin-top: 4px;
          color: var(--site-config-color-text-d);
        }
      }
    }
  }
</style>
