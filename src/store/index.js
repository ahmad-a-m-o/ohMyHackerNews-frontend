import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthtenticated: false,
    token: '', 
  },
  mutations: {
    onStart(state){
      state.token = localStorage.getItem('token');
      if( state.token && state.token!='' )
        state.isAuthtenticated = true;
      else state.isAuthtenticated = false;
    },
    login(state, token){
      state.isAuthtenticated=true;
      state.token = token;
      localStorage.setItem('token', token);
    }, 
    logout(state){
      state.isAuthtenticated=false;
      state.token = '';
      localStorage.removeItem('token');
    },
  },
  actions: {},
  modules: {},
});
