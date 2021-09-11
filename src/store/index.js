import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthtenticated: false,
    token: "",
    m_counter: 1,     // use while loading headers, m_counter is m th N rows of news headers
    cursor: 0,      // used in myPosts, for loading from index=cursor
    fetchedNewsHeader: [],    // headers of news - fetched in home page
    fetchedMyPostsH: [],    // headers of user's post - fetched in myPosts
    composeData: { title: "", content: "" },    // used in compose page - keeps title and content of users
  },
  mutations: {
    ///////// add value to cursor  -  set it's value
    addToCursor(state, n){
      state.cursor += n
    },
    setCursor(state, value){
      state.cursor = value;
    },
    ///////// add new header to fetchedMyPostsH  -  drop it
    addToMyPosts(state, postH){
      state.fetchedMyPostsH.push(postH);
    },
    dropMyPosts(state){
      state.fetchedMyPostsH = []
    },
    ///////// set m_counter += 1  -  set it's value
    m_counter_pp(state) {
      state.m_counter = state.m_counter + 1;
    },
    set_m_counter(state, value) {
      state.m_counter = value;
    },
    ///////// add header to fetchedNewsHeader  -  drop it
    addNewsHeder(state, header) {
      state.fetchedNewsHeader.push(header);
    },
    dropNewsHeaders(state) {
      state.fetchedNewsHeader = [];
    },
    ///////// load token on page loaded
    onStart(state) {
      state.token = localStorage.getItem("token");
      if (state.token && state.token != "") state.isAuthtenticated = true;
      else state.isAuthtenticated = false;
    },
    ///////// authentication
    login(state, token) {
      state.isAuthtenticated = true;
      state.token = token;
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.isAuthtenticated = false;
      state.token = "";
      localStorage.removeItem("token");
      this.dropMyPosts();
    },
    ///////// set composeData title and content  -  clear it
    updateComposeData_content(state, value) {
      state.composeData.content = value;
    },
    updateComposeData_title(state, value) {
      state.composeData.title = value;
    },
    cleanComposeData(state) {
      state.composeData.title = "";
      state.composeData.content = "";
    },
  },
  actions: {},
  modules: {},
});
