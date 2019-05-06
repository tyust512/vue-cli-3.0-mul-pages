import { createVue, createRouter, createStore } from '../../utils/index'

const routes = [
  { // 个人中心
    path: '/',
    name: 'personalCenter',
    component: () => import(/* webpackChunkName: "personal-center-chunk" */ './PersonalCenter.vue'),
  }
]

const modules = {

}

createVue(
  createRouter(routes),
  createStore(modules)
)
