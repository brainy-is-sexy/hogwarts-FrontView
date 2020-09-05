import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _df437270 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _71085d5a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7ab88542 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _3762f3e2 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _ca4149a0 = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _aaae0f62 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _52a7dae5 = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _31c9f7dc = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _0694c037 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _b13e8b7a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _df437270,
    name: "course"
  }, {
    path: "/login",
    component: _71085d5a,
    name: "login"
  }, {
    path: "/register",
    component: _7ab88542,
    name: "register"
  }, {
    path: "/teacher",
    component: _3762f3e2,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _ca4149a0,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _aaae0f62,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _52a7dae5,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _31c9f7dc,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _0694c037,
    name: "teacher-id"
  }, {
    path: "/",
    component: _b13e8b7a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
