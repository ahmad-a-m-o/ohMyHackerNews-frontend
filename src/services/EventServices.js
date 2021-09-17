import axios from "axios";
import {store} from '../store/index'

const client = axios.create({
  baseURL: "http://localhost:5000", // change it!
  withCredentials: false, // set true for production
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(null, function (error) {
  if (error.response.status === 403) {
    store.commit("logout");
  }
  return Promise.reject(error)
})

export default {
  newsH(n, m) {
    // get news headers - output arr's length is less than n and returns m th n rows of all headers
    return client.post("/getnewsH", { n, mth: m });
  },
  newsH2(id){
    return client.post("/getnewsH2", { id });
  },
  newsC(id) {
    return client.post("/getnewsC", { newsID: id });
  },
  register(name, email, password) {
    // sign up
    return client.post("/register", { name, email, password });
  },
  login(email, password) {
    // sign in
    return client.post("/login", { email, password });
  },
  compose(title, content, token) {
    // publish new news
    return client.post("/compose", { title, content, token });
  },
  myposts(token) {
    return client.post("/myposts", {token});
  },
  // like a post
  addLike(token, headerID){
    return client.post("/like/add", {token, headerID});
  },
  // dislike a post
  disLike(token, headerID){
    return client.post("/like/remove", {token, headerID});
  },
};
