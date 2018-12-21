
const mutations = {

  setPageName(state, name) {
    state.currentPageName = name   
  },

  changeLogin(state,data){
    state.isLogin = data;
  }
}
export default mutations