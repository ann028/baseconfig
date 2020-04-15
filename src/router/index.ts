import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // const store1: any = store.state
  // // const token = store1.auth.userInfo.token || window.sessionStorage.getItem('token');
  const token = window.sessionStorage.getItem('token')
  // to.matched.some((record) => {
  //   console.log(record)
  // })
  console.log(to.matched.some((record) => record.meta.auth))
  if (to.matched.some((record) => record.meta.auth)) {
    if (token) {
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
});

router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})


export default router
