import { contantRouteMap, asyncRouteMap } from '../../router';
import Vue from 'vue'
import * as UserApi from '../../api/user'
import {Message} from 'element-ui'
import router from '@/router'
function hasPermission(roles: any, route: any) {
  if (route.meta && route.meta.role) {
    const arr = route.meta.role.filter((v: any) => {
      return v === window.sessionStorage.getItem('roles')
    })
    console.log(arr)
    return arr;
  }
}
const auth = {
  state: {
    roles: '',
    staffRoles: [],
    routers: contantRouteMap,
    addRoutes: [],
    user: {},
    userId: '',
    token: '',
  },
  mutations: {
    SET_ROUTERS: (state: any, routers: any) => {
      state.addRoutes = routers;
      state.routers = contantRouteMap.concat(routers);
    },
    SET_USER(state: any, data: any) {
      state.user = data
      state.userId = data.userId
      state.token = data.token
      state.roles = data.roles
    },
    CLEARE_TOKEN(state: any, data: any) {
      state.user = {}
      state.userId = ''
      state.token = ''

      window.sessionStorage.removeItem('userId');
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('roles');

      router.push({path: '/login'})
      Message.success('您已退出登录')
    },
  },
  actions: {
    getUserLogin({commit}: any, data: any) {
      commit('SET_USER', data)
      window.sessionStorage.setItem('userId', data.userId);
      window.sessionStorage.setItem('token', data.token);
      window.sessionStorage.setItem('roles', data.roles);
    },
    GenerateRoutes({ commit }: any, data: any) {
      return new Promise((resolve) => {
        const { roles } = data;
        // console.log('==========', contantRouteMap[1].children, asyncRouteMap[0].children)
        const asyncChildRouterMap: any = asyncRouteMap[0].children;
        // 路由地图的第一个对象的子路由对象们，过滤一下：如果存在有当前的role匹配到的路由对象，嗯接着走：当前子路由如果还有子路由，过滤出含有权限的子路由后，这整个父路由也被过滤出来，如果没有，就不过滤了
        const accessedRouters = asyncChildRouterMap.filter((v: any) => {
          if (hasPermission(roles, v).length) {
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter((child: any) => {
                if (hasPermission(roles, child).length) {
                  return child
                }
                return false;
              });
            }
            return v;
          }
          return false;
        })
        // 两层过滤就得到一个只能role有权限能访问的路由map
        asyncRouteMap[0].children = accessedRouters;
        commit('SET_ROUTERS', asyncRouteMap);
        // 把这个动态路由图，放到state的addRoutes里，也追加到固态路由图里
        resolve();
      })
    },
    getUserInfo({commit}: any, data: any) {
      // commit('SET_USER', data)
      // return new Promise(resolve => {
        UserApi.getUserInfo().then((res: any) => {
          if (!res.data.success) {
            Message.error('登录过期，请重新登录!');
            window.sessionStorage.setItem('token', ' ');
            window.sessionStorage.setItem('userId', ' ');
            setTimeout(() => {
              window.location.href = '/login';
            }, 800);
          } else {
            commit('SET_USER', res.data.data)
          }
        })
      // }).catch((res: any) => {
      //   console.log(res.data)
      // })
    },
    async logout({commit}: any, data: any) {
      // await UserApi.logout()
      console.log('logout')
      commit('CLEARE_TOKEN')
    },
  },
}
export default auth
