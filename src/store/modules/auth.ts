const auth = {
  state: {
    userInfo: {
      userId: window.sessionStorage.getItem('userId') || NaN,
      token: window.sessionStorage.getItem('token') || '',
    }
  },
  mutations: {
    saveUserToken(state: any, data: any) {
      state.userInfo.userId = data.userId;
      state.userInfo.token = data.token;

      window.sessionStorage.setItem('userId', data.userId.toString());
      window.sessionStorage.setItem('token', data.token);
    },
  },
  actions: {
    saveUser({ commit}: any , data: any ) {
      commit('saveUserToken', data);
    },
  }
}
export default auth