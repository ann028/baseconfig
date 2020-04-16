import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter)

export const contantRouteMap = [
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

export const asyncRouteMap = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '导航1',
      role: ['admin'],
      icon: ''
    },
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
          title: '列表1',
          role: ['admin', 'staff'],
          icon: ''
        },
      },{
        path: '/nav1',
        name: 'Nav1',
        component: () => import('../views/Nav1.vue'),
        meta: {
          title: '列表2',
          role: ['admin', 'staff'],
          icon: ''
        },
      },
    ]
  }
]

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
  routes: contantRouteMap
})

router.beforeEach((to, from, next) => {
  console.log('store---------', store)
  let roles: any = store.state
  roles = roles.auth.roles
  const token = window.sessionStorage.getItem('token')
  Nprogress.start()
  // to.matched.some((record) => {
  //   console.log(record.meta)
  // })
  // console.log(to.matched.some((record) => record.meta.auth))
  // if (to.matched.some((record) => record.meta.auth)) {
    if (token) {
      // next();
      if (to.path === '/login') { // 如果是登录页面的话，直接next()
        next();
      } else { // 否则 跳转到登录页面
        // next();
        let state: any = store.state
        if (state.auth.addRouters.length === 0) {
          store.dispatch('saveUser', {
            roles
          }).then(() => {
            const roles1 = roles.auth.roles;
            store.dispatch('GenerateRoutes', {
              roles1
            }).then(() => {
              console.log('*********', router)
              // router.addRoutes(roles.auth.addRoutes);
              next()
            })
          }).catch(err => {})
        } else {
          next()
        }
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
