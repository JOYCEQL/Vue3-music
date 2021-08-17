<!--
 * @Author: yuguangzhou
 * @Date: 2021-08-12 10:52:26
 * @LastEditTime: 2021-08-17 15:50:40
 * @LastEditors: yuguangzhou
 * @Description:播放器组件
-->
<template>
   <div
    class="player"
  >
      <div
        class="normal-player"
        v-show="fullScreen"
      >
        <div class="background">
          <img :src="currentSong.pic">
        </div>
        <div class="top">
          <div
            class="back"
            @click="goBack"
          >
            <i class="icon-back"></i>
          </div>
          <h1 class="title">{{currentSong.name}}</h1>
          <h2 class="subtitle">{{currentSong.singer}}</h2>
        </div>
        <div class="bottom">
          <div class="operators">
            <div class="icon i-left">
              <play-once @click="handleMode"   v-if="playMode===PLAY_MOD.loop"  theme="outline" size="30" fill="#3a5de7"/>
              <play-cycle @click="handleMode"  v-if="playMode===PLAY_MOD.sequence"  theme="outline" size="30" fill="#3a5de7"/>
              <shuffle-one @click="handleMode" v-if="playMode===PLAY_MOD.random"  theme="outline" size="30" fill="#3a5de7"/>
              <!-- <i @click="handleMode" :class="modeIcon"></i> -->
            </div>
            <div class="icon i-left" :class="disableCls" >
              <!-- <i @click="handlePrev" class="icon-prev"></i> -->
              <go-start @click="handlePrev" theme="filled" size="30" fill="#3a5de7"/>
            </div>
            <div class="icon i-center"  :class="disableCls">
              <!-- <i @click="togglePlay" :class="playClass"></i> -->
              <play @click="togglePlay" theme="filled" size="60" fill="#3a5de7" v-if="!playing" />
              <pause-one @click="togglePlay" theme="filled" size="60" fill="#3a5de7" v-else />
            </div>
            <div class="icon i-right"  :class="disableCls">
              <!-- <i @click="handleNext"  class="icon-next"></i> -->
              <go-end @click="handleNext"  theme="filled" size="30" fill="#3a5de7"/>
            </div>
            <div class="icon i-right">
              <!-- <i class="icon-not-favorite"></i> -->
              <!-- <collection-records theme="outline" size="30" fill="#3a5de7"/> -->
              <!-- <like theme="two-tone" size="30" :fill="['#2F88FF' ,'#2F88FF']"/> -->
              <!-- <like theme="two-tone" size="30" fill="#2F88FF"/> -->
              <like @click="handleFavorite(currentSong)" theme="outline" size="30" fill="#3a5de7" v-if="!getFavoriteStatus(currentSong)" />
              <like @click="handleFavorite(currentSong)" theme="filled" size="30" fill="#3a5de7" v-else />
            </div>
          </div>
        </div>
      </div>
    <audio
      ref="audioRef"
      @canplay="ready"
      @pause="pause"
      @ended="end"
    ></audio>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import useMode from '@/hooks/use-mode'
import { PLAY_MODE } from '@/assets/js/constant'
import useFavorite from '@/hooks/use-favorite'
export default {
  name: 'Player',
  setup () {
    // data
    const audioRef = ref(null)
    const PLAY_MOD = PLAY_MODE
    const songReady = ref(false)
    // vuex
    const store = useStore()
    const fullScreen = computed(() => store.state.fullScreen)
    const currentSong = computed(() => store.getters.currentSong)
    const playing = computed(() => store.state.playing)
    const playList = computed(() => store.state.playList)
    const currentIndex = computed(() => store.state.currentIndex)
    const playMode = computed(() => store.state.playMode)
    // computed
    // const playClass = computed(() => {
    //   return playing.value ? 'icon-pause' : 'icon-play'
    // })
    const disableCls = computed(() => {
      return songReady.value ? '' : 'disable'
    })

    // watch
    watch(currentSong, newSong => {
      if (!newSong.id || !newSong.url) {
        return
      }
      const audioEl = audioRef.value
      audioEl.src = newSong.url
      audioEl.play()
      store.commit('setPlayingState', true)
    })
    watch(playing, newPlaying => {
      // 保护，资源加载完毕后再播放,防止播放报错
      if (!songReady.value) {
        return
      }
      const audioEl = audioRef.value
      if (newPlaying) {
        audioEl.play()
      } else {
        audioEl.pause()
      }
    })
    // function
    const togglePlay = () => {
      if (!songReady.value) {
        return
      }
      store.commit('setPlayingState', !playing.value)
    }

    const handlePrev = () => {
      const list = playList.value
      if (!songReady.value || !list.length) {
        return
      }
      if (list.length === 1) {
        loop()
      } else {
        let index = currentIndex.value - 1
        if (index === -1) index = list.length - 1
        store.commit('setCurrentIndex', index)
      }
    }
    const handleNext = () => {
      const list = playList.value
      if (!songReady.value || !list.length) {
        return
      }
      if (list.length === 1) {
        loop()
      } else {
        let index = currentIndex.value + 1
        if (index === list.length) index = 0
        store.commit('setCurrentIndex', index)
      }
    }
    const pause = () => {
      store.commit('setPlayingState', false)
    }
    const end = () => {
      if (playMode.value === PLAY_MODE.loop) {
        loop()
      } else {
        handleNext()
      }
    }
    const loop = () => {
      const audioEl = audioRef.value
      audioEl.currentTime = 0
      audioEl.play()
      store.commit('setPlayingState', true)
    }

    const ready = () => {
      if (songReady.value) {
        return
      }
      songReady.value = true
    }
    const goBack = () => {
      store.commit('setFullScreen', false)
    }

    // hooks
    const { modeIcon, handleMode } = useMode()
    const { handleFavorite, getFavoriteStatus } = useFavorite()

    return {
      audioRef,
      fullScreen,
      currentSong,
      PLAY_MOD,
      // playClass,
      playing,
      playMode,
      disableCls,
      goBack,
      togglePlay,
      handlePrev,
      handleNext,
      loop,
      ready,
      pause,
      end,
      // hooks
      handleMode,
      modeIcon,
      handleFavorite,
      getFavoriteStatus
    }
  }
}
</script>

<style scoped lang="scss">
 .player {
    .normal-player {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 150;
      background: $color-background;
      .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.6;
        filter: blur(20px);

        img {
          width: 100%;
          height: 100%;
        }
      }
      .top {
        position: relative;
        margin-bottom: 25px;
        .back {
          position: absolute;
          top: 0;
          left: 6px;
          z-index: 50;
        }
        .icon-back {
          display: block;
          padding: 9px;
          font-size: $font-size-large-x;
          color: $color-theme;
          transform: rotate(-90deg);
        }
        .title {
          width: 70%;
          margin: 0 auto;
          line-height: 40px;
          text-align: center;
          @include no-wrap();
          font-size: $font-size-large;
          color: $color-text;
        }
        .subtitle {
          line-height: 20px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-text;
        }
      }
      .middle {
        position: fixed;
        width: 100%;
        top: 80px;
        bottom: 170px;
        white-space: nowrap;
        font-size: 0;
        .middle-l {
          display: inline-block;
          vertical-align: top;
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 80%;
          .cd-wrapper {
            position: absolute;
            left: 10%;
            top: 0;
            width: 80%;
            box-sizing: border-box;
            height: 100%;
            .cd {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border-radius: 50%;
                border: 10px solid rgba(255, 255, 255, 0.1);
              }
              .playing {
                animation: rotate 20s linear infinite
              }
            }
          }
          .playing-lyric-wrapper {
            width: 80%;
            margin: 30px auto 0 auto;
            overflow: hidden;
            text-align: center;
            .playing-lyric {
              height: 20px;
              line-height: 20px;
              font-size: $font-size-medium;
              color: $color-text-l;
            }
          }
        }
        .middle-r {
          display: inline-block;
          vertical-align: top;
          width: 100%;
          height: 100%;
          overflow: hidden;
          .lyric-wrapper {
            width: 80%;
            margin: 0 auto;
            overflow: hidden;
            text-align: center;
            .text {
              line-height: 32px;
              color: $color-text-l;
              font-size: $font-size-medium;
              &.current {
                color: $color-text;
              }
            }
            .pure-music {
              padding-top: 50%;
              line-height: 32px;
              color: $color-text-l;
              font-size: $font-size-medium;
            }
          }
        }
      }
      .bottom {
        position: absolute;
        bottom: 50px;
        width: 100%;
        .dot-wrapper {
          text-align: center;
          font-size: 0;
          .dot {
            display: inline-block;
            vertical-align: middle;
            margin: 0 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: $color-text-l;
            &.active {
              width: 20px;
              border-radius: 5px;
              background: $color-text-ll;
            }
          }
        }
        .progress-wrapper {
          display: flex;
          align-items: center;
          width: 80%;
          margin: 0px auto;
          padding: 10px 0;
          .time {
            color: $color-text;
            font-size: $font-size-small;
            flex: 0 0 40px;
            line-height: 30px;
            width: 40px;
            &.time-l {
              text-align: left;
            }
            &.time-r {
              text-align: right;
            }
          }
          .progress-bar-wrapper {
            flex: 1;
          }
        }
        .operators {
          display: flex;
          align-items: center;
          .icon {
            flex: 1;
            color: $color-theme;
            &.disable {
              color: $color-theme-d;
            }
            i {
              font-size: 30px;
            }
          }
          .i-left {
            text-align: right;
          }
          .i-center {
            padding: 0 20px;
            text-align: center;
            i {
              font-size: 40px;
            }
          }
          .i-right {
            text-align: left
          }
          .icon-favorite {
            color: $color-sub-theme;
          }
        }
      }
      &.normal-enter-active, &.normal-leave-active {
        transition: all .6s;
        .top, .bottom {
          transition: all .6s cubic-bezier(0.45, 0, 0.55, 1);
        }
      }
      &.normal-enter-from, &.normal-leave-to {
        opacity: 0;
        .top {
          transform: translate3d(0, -100px, 0);
        }
        .bottom {
          transform: translate3d(0, 100px, 0)
        }
      }
    }
  }
</style>
