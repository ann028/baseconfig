import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
 
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '列表展示',
      role: ['admin', 'staff'],
      icon: ''
    },
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('token')
  Nprogress.start()
  // to.matched.some((record) => {
  //   console.log(record.meta)
  // })
  // console.log(to.matched.some((record) => record.meta.auth))
  // if (to.matched.some((record) => record.meta.auth)) {
    if (token) {
      // next();
      if (to.path === '/') { // 如果是登录页面的话，直接next()
        next();
      } else { // 否则 跳转到登录页面
        next();
      }
    } else {
      if (to.path === '/login') { // 如果是登录页面的话，直接next()
        next();
      } else { // 否则 跳转到登录页面
        next({
          path: '/login'
        });
      }
    }
  // } else {
  //   if (to.path === '/login') { // 如果是登录页面的话，直接next()
  //     next();
  //   } else { // 否则 跳转到登录页面
  //     next({
  //       path: '/login'
  //     });
  //   }
  // }
});

router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  Nprogress.done()
})


export default router
