import { createVue, createRouter, createStore } from '../../utils/index'

import Home from './Home.vue'
import CourseContainer from './CourseContainer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/course',
    component: CourseContainer,
    children: [
      {
        // 课程目录
        name: 'course_catalog',
        path: 'catalog',
        component: () => import(/* webpackChunkName: "quiz-chunk" */ './CourseCatalog.vue'),
      }
    ],
  }
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
