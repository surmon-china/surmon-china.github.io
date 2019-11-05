
const UID = 'surmon-china'

export const state = () => ({
  github_uid: UID,
})

export const getters = {
  github_uid(state) {
    return state.github_uid
  },
  github_link(state) {
    return `https://github.com/${state.github_uid}`
  }
}
