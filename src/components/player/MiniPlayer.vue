<!--
 * @Author: yuguangzhou
 * @Date: 2021-09-12 09:36:16
 * @LastEditTime: 2022-01-07 11:12:30
 * @LastEditors: yuguangzhou
 * @Description:迷你播放器
-->
<template>
  <transition name="mini">
    <div
      class="mini-player"
      :style="bottomStyle"
      v-show="!fullScreen"
      @click="showNormalPlayer"
    >
      <div class="cd-wrapper">
        <div
          ref="cdRef"
          class="cd"
        >
          <img
            ref="cdImageRef"
            width="40"
            height="40"
            :src="currentSong.pic"
            :class="cdClass"
          >
        </div>
      </div>
      <div
        ref="sliderWrapperRef"
        class="slider-wrapper"
      >
        <div class="slider-group">
          <div
            class="slider-page"
          >
            <h2 class="name">{{currentSong.name}}</h2>
            <p class="desc">{{currentSong.singer}}</p>
          </div>
        </div>
      </div>
      <div class="control">
        <circle-btn
          :radius="32"
          :progress="progress"
        >
          <i
            class="icon-mini"
            :class="miniPlayIcon"
            @click.stop="togglePlay"
          ></i>
        </circle-btn>
      </div>
      <div class="control" @click.stop="showPlaylist">
       <music-list theme="filled" size="30" fill="#3a5de7"/>
      </div>
      <play-list ref="playlistRef"></play-list>
    </div>
  </transition>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import useCd from '@/hooks/use-cd'
import PlayList from './PlayList'
import CircleBtn from './CircleBtn'
import { useRoute } from 'vue-router'

export default {
  name: 'mini-player',
  components: {
    CircleBtn,
    PlayList
  },
  props: {
    progress: {
      type: Number,
      default: 0
    },
    togglePlay: Function
  },
  setup () {
    const router = useRoute()
    const playlistRef = ref(null)
    const store = useStore()
    const fullScreen = computed(() => store.state.fullScreen)
    const currentSong = computed(() => store.getters.currentSong)
    const playing = computed(() => store.state.playing)
    const playList = computed(() => store.state.playList)

    const { cdClass, cdRef, cdImageRef } = useCd()

    const miniPlayIcon = computed(() => {
      return playing.value ? 'icon-pause-mini' : 'icon-play-mini'
    })

    const bottomStyle = computed(() => {
      return router.meta.showFoot === undefined ? 'bottom:50px' : 'bottom:0'
    })

    function showNormalPlayer () {
      store.commit('setFullScreen', true)
    }

    function showPlaylist () {
      playlistRef.value.show()
    }

    return {
      playlistRef,
      fullScreen,
      currentSong,
      playList,
      miniPlayIcon,
      showNormalPlayer,
      showPlaylist,
      bottomStyle,
      // cd
      cdClass,
      cdRef,
      cdImageRef
      // mini-slider
    }
  }
}
</script>

<style lang="scss" scoped>
  .mini-player {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    z-index: 180;
    width: 100%;
    height: 60px;
    background: var(--site-config-color-background);
    .cd-wrapper {
      flex: 0 0 40px;
      width: 40px;
      height: 40px;
      padding: 0 10px 0 20px;
      .cd {
        height: 100%;
        width: 100%;
        img {
          border-radius: 50%;
          &.playing {
            animation: rotate 10s linear infinite;
          }
          &.pause {
            animation-play-state: paused;
          }
        }
      }
    }
    .slider-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .slider-group {
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        .slider-page {
          display: inline-block;
          width: 100%;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          .name {
            margin-bottom: 2px;
            @include no-wrap();
            font-size: $font-size-medium;
            color: var(--site-config-color-text);
          }
          .desc {
            @include no-wrap();
            font-size: $font-size-small;
            color: var(--site-config-color-text-d);
          }
        }
      }
    }
    .control {
      flex: 0 0 30px;
      width: 30px;
      padding: 0 10px;
      .icon-playlist {
        position: relative;
        top: -2px;
        font-size: 28px;
        color: $color-theme-d;
      }
      .icon-mini {
        position: absolute;
        left: 0;
        top: 0;
        color: $color-theme;
        font-size: 32px;
      }
    }
    &.mini-enter-active, &.mini-leave-active {
      transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);
    }
    &.mini-enter-from, &.mini-leave-to {
      opacity: 0;
      transform: translate3d(0, 100%, 0)
    }
  }
</style>
