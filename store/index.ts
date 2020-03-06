
import { ActionContext } from 'vuex'
import { Context } from '@nuxt/types'
import { isBrowser } from '@/environment'
import CONFIG, { GitHubRepositorieIDs } from '@/config'
import * as http from '~/services/http'

export const state = () => ({
  isChinaGuest: false,
  userInfo: null as $TODO,
  repositories: [],
  inited: false
})

export type RootState = ReturnType<typeof state>
export type VuexContext = ActionContext<RootState, RootState>

export enum StoreNames {
  // mutations
  UpdateGuestState = 'updateGuestState',
  UpdateUserInfo = 'updateUserInfo',
  UpdateRepositories = 'updateRepositories',
  UpdateInitedState = 'updateInitedState',
  // actions
  Init = 'init',
  GetUserInfo = 'getUserInfo',
  GetRepositories = 'getRepositories',
  // getters
  OwnRepositories = 'ownRepositories',
  AppRepositories = 'appRepositories',
}

export const getters = {
  [StoreNames.OwnRepositories](state: RootState) {
    return state.repositories
      .filter((repositorie: $TODO) => !repositorie.fork)
      .sort((a: $TODO, b: $TODO) => b.stargazers_count - a.stargazers_count)
  },
  [StoreNames.AppRepositories](state: RootState) {
    const ids = Object.values(GitHubRepositorieIDs)
    return state.repositories.filter(
      (repositorie: $TODO) => ids.includes(repositorie.name)
    )
  }
}

export const mutations = {
  [StoreNames.UpdateInitedState](state: RootState, value: boolean) {
    state.inited = value
  },
  [StoreNames.UpdateGuestState](state: RootState, value: boolean) {
    state.isChinaGuest = value
  },
  [StoreNames.UpdateUserInfo](state: RootState, value: $TODO) {
    state.userInfo = value
  },
  [StoreNames.UpdateRepositories](state: RootState, value: $TODO) {
    state.repositories = value
  }
}

export const actions = {
  [StoreNames.GetUserInfo](vuexContext: VuexContext) {
    return http.getUserInfo(CONFIG.GITHUB_UID).then(userinfo => {
      vuexContext.commit(StoreNames.UpdateUserInfo, userinfo)
    })
  },
  [StoreNames.GetRepositories](vuexContext: VuexContext) {
    return http.getRepositories(CONFIG.GITHUB_UID).then(repositories => {
      vuexContext.commit(StoreNames.UpdateRepositories, repositories)
    })
  },
  [StoreNames.Init](vuexContext: VuexContext) {
    // 用户来源
    vuexContext.commit(
      StoreNames.UpdateGuestState,
      isBrowser && navigator.language.includes('zh-CN')
    )
    // 基本数据
    return Promise.all([
      vuexContext.dispatch(StoreNames.GetUserInfo),
      vuexContext.dispatch(StoreNames.GetRepositories)
    ]).finally(() => {
      vuexContext.commit(StoreNames.UpdateInitedState, true)
    })
  }
}
