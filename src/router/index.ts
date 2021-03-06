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
  //   redirect: '/home'
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
]

export const asyncRouteMap = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: {
          title: '首页',
          role: ['admin', 'staff'],
          icon: 'icon-nav-home',
        },
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import('../views/About.vue'),
        meta: {
          title: '列表3',
          role: ['admin', 'staff'],
        },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
          title: '列表1',
          role: ['admin', 'staff'],
          icon: '',
        },
      },
      {
        path: '/nav1',
        name: 'Nav1',
        component: () => import('../views/Nav1.vue'),
        meta: {
          title: '列表2',
          role: ['admin', 'staff'],
          icon: '',
        },
        children: [
          {
            path: '/nav1',
            name: 'Nav1',
            component: () => import('../views/Nav1.vue'),
            meta: {
              title: '列表2-1',
              role: ['admin', 'staff'],
              icon: '',
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/NotFound.vue'),
  },
]

// const routes: Array<RouteConfig> = [

//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//     children: [
//       {
//         path: '/about',
//         name: 'About',
//         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//       }
//     ]
//   },
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: contantRouteMap,
})
console.log('=============', process.env.BASE_URL)
router.beforeEach((to, from, next) => {
  const storeRoles: any = store.state
  const roles = storeRoles.auth.roles || window.sessionStorage.getItem('roles');
  const token = window.sessionStorage.getItem('token')
  Nprogress.start()
  if (token) {
    // next();
    if (to.path === '/login') { // 如果是登录页面的话，直接next()
      next();
    } else { // 否则 跳转到登录页面
      // next();
      const storeAddRoute: any = store.state
      if (storeAddRoute.auth.addRoutes.length === 0) {
        store.dispatch('getUserInfo', {
          roles,
        }).then(() => {
          const storeRoles: any = store.state
          const roles = storeRoles.auth.roles;
          store.dispatch('GenerateRoutes', {
            roles,
          }).then(() => {
            const storeaddRouters: any = store.state
            const addRoutes = storeaddRouters.auth.addRoutes;
            router.addRoutes(addRoutes);
            console.log(addRoutes)
            // next()
            next({
              ...to as any,
              replace: true,
            })
          })
        }).catch((err) => {
          console.log(err)
        })
      } else {
        next()
      }
    }
  } else {
    if (to.path === '/login') { // 如果是登录页面的话，直接next()
      next();
    } else { // 否则 跳转到登录页面
      next({
        path: '/login',
      });
    }
  }
});

router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  Nprogress.done()
})


export default router
