import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthtenticated: false,
    token: '', 
    fetchedNewsHeader: [],
    composeData: {title: '', content: '', },
  },
  mutations: {
    addNewsHeder(state, header){
      state.fetchedNewsHeader.push(header);
    },
    dropNewsHeaders(state){
      state.fetchedNewsHeader = [];
    },
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
    updateComposeData_content(state, value){state.composeData.content = value},
    updateComposeData_title(state, value){state.composeData.title = value},
    cleanComposeData(state){state.composeData.title = ''; state.composeData.content = '';},
  },
  actions: {},
  modules: {},
});
