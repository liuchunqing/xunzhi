import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  mutations: {
    setUserInfo(state,userInfo){
      localStorage.setItem('userInfo', JSON.stringify(userInfo)); 
      state.userInfo = userInfo
    }
   
  }
})
