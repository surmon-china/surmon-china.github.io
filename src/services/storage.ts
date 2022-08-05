export const get = (key: string) => localStorage.getItem(key)
export const set = (key: string, data: any) => localStorage.setItem(key, data)
export const remove = (key: string) => localStorage.removeItem(key)

export const setJSON = (key: string, data: any) => set(key, JSON.stringify(data))
export const getJSON = (key: string): JSON | null => {
  let result = null
  const data = get(key)
  if (!data) {
    return result
  }

  try {
    result = JSON.parse(data)
  } catch {
    result = null
  }

  return result
}

export default {
  get,
  set,
  remove,
  setJSON,
  getJSON
}
