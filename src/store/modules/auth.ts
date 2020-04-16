import { contantRouteMap, asyncRouteMap } from '../../router';
function hasPermission(roles: any, route: any) {
  if (route.meta && route.meta.role) {
    console.log(route.meta.role)
    return !!route.meta.role.find((v: any) => roles === v);
  } else {
    return true
  }
}
const auth = {
  state: {
    userInfo: {
      userId: window.sessionStorage.getItem('userId') || NaN,
      token: window.sessionStorage.getItem('token') || '',
    },
    roles: '',
    staffRoles: [],
    routers: contantRouteMap,
    addRouters: []
  },
  mutations: {
    saveUserToken(state: any, data: any) {
      state.userInfo.userId = data.userId;
      state.userInfo.token = data.token;
      console.log('=========', data.userId)
      window.sessionStorage.setItem('userId', data.userId);
      window.sessionStorage.setItem('token', data.token);
    },
    saveRole(state: any, data: any) {
      state.staffRoles = data.roles
      state.roles = data.roles.toString()
      console.log('state', state.roles)
      window.sessionStorage.setItem('roles', data.roles.toString());
    },
    SET_ROUTERS: (state: any, routers: any) => {
      state.addRoutes = routers;
      state.routers = contantRouteMap.concat(routers);
    },
  },
  actions: {
    saveUser({ commit}: any , data: any ) {
      commit('saveUserToken', data);
    },
    setRoles({commit}: any, data: any) {
      console.log('11', data.roles.toString())
      commit('saveRole', data)
    },
    GenerateRoutes({ commit }: any, data: any) {
      return new Promise(resolve => {
        const { roles } = data;
        const asyncChildRouterMap: any = asyncRouteMap[0].children;
        // 路由地图的第一个对象的子路由对象们，过滤一下：如果存在有当前的role匹配到的路由对象，嗯接着走：当前子路由如果还有子路由，过滤出含有权限的子路由后，这整个父路由也被过滤出来，如果没有，就不过滤了
        const accessedRouters = asyncChildRouterMap.filter((v: any) => {
          if (hasPermission(roles, v)) {
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter((child: any) => {
                if (hasPermission(roles, child)) {
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
  }
}
export default auth
// import Vue from 'vue';
// import Vuex from 'vuex';
// const auth = new Vuex.Store({
//   state: {
//     userInfo: {
//       userId: window.sessionStorage.getItem('userId') || NaN,
//       token: window.sessionStorage.getItem('token') || '',
//     },
//     role: ''
//   },
//   mutations: {
//     saveUserToken(state: any, data: any) {
//       state.userInfo.userId = data.userId;
//       state.userInfo.token = data.token;

//       window.sessionStorage.setItem('userId', data.userId.toString());
//       window.sessionStorage.setItem('token', data.token);
//     },
//     saveRole(state, data) {
//       state.role = data.roles.toString()
//     }
//   },
//   actions: {
//     saveUser({ commit}: any , data: any ) {
//       commit('saveUserToken', data);
//       this.dispatch('saverole', data)
//     },
//     saverole({commit}, data) {
//       commit('saveRole', data)
//     }
//   }
// })
// export default auth