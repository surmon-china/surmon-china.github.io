/**
 * @file Global store
 * @author Surmon <https://github.com/surmon-china>
 */

import { ActionContext } from 'vuex'
import { isBrowser } from '@/environment'
import { GitHubRepositorieIDs } from '@/config'
import * as http from '~/services/http'

export const state = () => ({
  isChinaGuest: false,
  isMobileDevice: false,
  userInfo: null as $TODO,
  repositories: [] as $TODO[],
  organizations: [] as $TODO[],
  inited: false
})

export type RootState = ReturnType<typeof state>
export type VuexContext = ActionContext<RootState, RootState>

export enum StoreNames {
  // mutations
  UpdateGuestState = 'updateGuestState',
  UpdateMobileState = 'updateMobileState',
  UpdateUserInfo = 'updateUserInfo',
  UpdateRepositories = 'updateRepositories',
  UpdateOrganizations = 'updateOrganizations',
  UpdateInitedState = 'updateInitedState',
  // actions
  Init = 'init',
  GetUserInfo = 'getUserInfo',
  GetRepositories = 'getRepositories',
  GetOrganizations = 'getOrganizations',
  // getters
  OwnRepositories = 'ownRepositories',
  AppRepositories = 'appRepositories',
  GetRepositorieDetail = 'getRepositorieDetail',
}

export const getters = {
  [StoreNames.OwnRepositories](state: RootState) {
    return state.repositories
      .filter((repositorie: $TODO) => !repositorie.fork)
      .sort((a: $TODO, b: $TODO) => b.stargazers_count - a.stargazers_count)
  },
  [StoreNames.AppRepositories](state: RootState) {
    const ids = Object.values(GitHubRepositorieIDs)
    return state.repositories
    .filter((repositorie: $TODO) => ids.includes(repositorie.name))
    .sort((a: $TODO, b: $TODO) => b.stargazers_count - a.stargazers_count)
  },
  [StoreNames.GetRepositorieDetail](state: RootState) {
    return (repositorieName: string) => {
      return state.repositories.find(
        repositorie => repositorie.name === repositorieName
      )
    }
  }
}

export const mutations = {
  [StoreNames.UpdateInitedState](state: RootState, value: boolean) {
    state.inited = value
  },
  [StoreNames.UpdateGuestState](state: RootState, value: boolean) {
    state.isChinaGuest = value
  },
  [StoreNames.UpdateMobileState](state: RootState, value: boolean) {
    state.isMobileDevice = value
  },
  [StoreNames.UpdateUserInfo](state: RootState, value: $TODO) {
    state.userInfo = value
  },
  [StoreNames.UpdateRepositories](state: RootState, value: $TODO) {
    state.repositories = value
  },
  [StoreNames.UpdateOrganizations](state: RootState, value: $TODO) {
    state.organizations = value
  }
}

export const actions = {
  [StoreNames.GetUserInfo](vuexContext: VuexContext) {
    return http.getUserInfo().then(userinfo => {
      vuexContext.commit(StoreNames.UpdateUserInfo, userinfo)
    })
  },
  [StoreNames.GetRepositories](vuexContext: VuexContext) {
    return http.getRepositories().then(repositories => {
      vuexContext.commit(StoreNames.UpdateRepositories, repositories)
    })
  },
  [StoreNames.GetOrganizations](vuexContext: VuexContext) {
    return http.getOriginations().then(organizations => {
      vuexContext.commit(StoreNames.UpdateOrganizations, organizations)
    })
  },
  [StoreNames.Init](vuexContext: VuexContext) {
    // 用户来源
    vuexContext.commit(
      StoreNames.UpdateGuestState,
      isBrowser && navigator.language.includes('zh-CN')
    )
    // 设备类型
    vuexContext.commit(
      StoreNames.UpdateMobileState,
      isBrowser && (
        /Android/i.test(navigator.userAgent) ||
        /webOS/i.test(navigator.userAgent) ||
        /iPhone/i.test(navigator.userAgent) ||
        /iPad/i.test(navigator.userAgent) ||
        /iPod/i.test(navigator.userAgent) ||
        /BlackBerry/i.test(navigator.userAgent) ||
        /Windows Phone/i.test(navigator.userAgent)
      )
    )
    return Promise.all([
      vuexContext.dispatch(StoreNames.GetUserInfo),
      vuexContext.dispatch(StoreNames.GetRepositories)
    ]).finally(() => {
      vuexContext.commit(StoreNames.UpdateInitedState, true)
    })
  }
}
