/*
 * @Author: yuguangzhou
 * @Date: 2021-06-20 17:35:53
 * @LastEditTime: 2022-01-06 20:31:53
 * @LastEditors: yuguangzhou
 * @Description: axios请求封装
 */
import axios from 'axios'
const ERR_OK = 0
const baseURL = process.env.NODE_ENV === 'production' ? 'http://siyueqc.xyz/music/' : '/'

axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((e) => {
    console.log(e)
  })
}
