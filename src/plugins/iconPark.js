/*
 * @Author: yuguangzhou
 * @Date: 2021-08-12 17:09:49
 * @LastEditTime: 2021-09-12 16:28:01
 * @LastEditors: yuguangzhou
 * @Description:
 */
import { Play, PauseOne, LeftC, GoStart, GoEnd, Like, CollectionRecords, ShuffleOne, PlayOnce, PlayCycle, MusicList } from '@icon-park/vue-next'
export function IconPark (app) {
  app.component('Play', Play)
  app.component('PauseOne', PauseOne)
  app.component('LeftC', LeftC)
  app.component('GoStart', GoStart)
  app.component('GoEnd', GoEnd)
  app.component('Like', Like)
  app.component('CollectionRecords', CollectionRecords)
  app.component('ShuffleOne', ShuffleOne)
  app.component('PlayOnce', PlayOnce)
  app.component('PlayCycle', PlayCycle)
  app.component('MusicList', MusicList)
}
