/*
 * @Author: yuguangzhou
 * @Date: 2022-01-06 11:05:58
 * @LastEditTime: 2022-01-06 13:59:58
 * @LastEditors: yuguangzhou
 * @Description: 设置主题
 */

import { get } from 'lodash-es'
const mountedVarKeys = []

function StyleProvider (styleVars) {
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
  mountedVarKeys.length = 0

  const styles = formatStyleVars(styleVars)
  Object.entries(styles).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
    mountedVarKeys.push(key)
  })
}
export function setThemes (config, name) {
  const themes = get(config, name, {})
  const styleVars = Object.entries(themes).reduce((styleVars, [key, value]) => {
    styleVars[`site-config-${key}`] = value
    return styleVars
  }, {})

  StyleProvider(styleVars)
}

export function formatStyleVars (styleVars) {
  return Object.entries(styleVars ?? {}).reduce((styles, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`
    styles[cssVar] = value
    return styles
  }, {})
}

export function kebabCase (str) {
  const reg = /([^-])([A-Z])/g
  return str.replace(reg, '$1-$2').replace(reg, '$1-$2').toLowerCase()
}
