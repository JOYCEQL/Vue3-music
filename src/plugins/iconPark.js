/*
 * @Author: yuguangzhou
 * @Date: 2021-08-12 17:09:49
 * @LastEditTime: 2022-01-06 15:15:08
 * @LastEditors: yuguangzhou
 * @Description:
 */
import { Play, PauseOne, LeftC, GoStart, GoEnd, Like, CollectionRecords, ShuffleOne, PlayOnce, PlayCycle, MusicList, Moon, Sun } from '@icon-park/vue-next'
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
  app.component('Moon', Moon)
  app.component('Sun', Sun)
}
