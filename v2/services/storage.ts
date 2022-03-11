/**
 * @file Local storage
 * @module services/storage
 * @author Surmon <https://github.com/surmon-china>
 */

export const get = (key: string) => localStorage.getItem(key)
export const set = (key: string, data: any) => localStorage.setItem(key, data)
export const remove = (key: string) => localStorage.removeItem(key)

export const setJSON = (key: string, data: any) => set(key, JSON.stringify(data))
export const getJSON = (key: string): JSON => {
  const data = get(key)
  return data ? JSON.parse(data) : null
}
