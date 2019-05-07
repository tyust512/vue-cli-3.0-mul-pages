import { createVue, createRouter, createStore } from '../../utils/index'

import Home from './Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]

const modules = {
  home: {
    state: {
      userInfo: {}, // 用户信息
    },
    mutations: {
      saveUserInfo (state, userInfo) {
        state.userInfo = userInfo
      },
    },
    actions: {

    },
    getters: {},
  },
}

createVue(
  createRouter(routes),
  createStore(modules)
)
