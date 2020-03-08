/**
 * @file Memory storage
 * @module services/memory
 * @author Surmon <https://github.com/surmon-china>
 */

import { isBrowser } from '@/environment'

const getCachePool = (): any => {
  const global = window as any
  global.appCache = global.appCache || {}
  return global.appCache
}

export const get = (key: string) => isBrowser && getCachePool()[key]
export const has = (key: string) => get(key) !== undefined
export const set = (key: string, data: any) => {
  if (isBrowser) {
    getCachePool()[key] = data
  }
}
