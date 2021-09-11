<template>
  <div class="myposts">
   <div
      v-for="{ id, idC, date, title, author } in this.$store.state.fetchedMyPostsH"
      :key="idC"
    >
      <NewsHead :id="id" :date="date" :title="title" :author="author" />
    </div>
    <div class="d-flex justify-content-center">
      <b-button
        class="btn-sm btn-block mb-2"
        variant="outline-secondary"
        @click="loadMore"
        v-if="this.$store.state.fetchedMyPostsH.length<this.myPostsID.length">
        more
      </b-button>
      <b-spinner
        class="mb-5"
        style="width: 3rem; height: 3rem; center"
        label="Large Spinner"
        type="grow"
        v-if="this.isloading"
      ></b-spinner>
    </div>
    <b-icon
      @click="refresh"
      icon="arrow-counterclockwise"
      class="fixed-bottom m-3 ripple"
      :animation="this.isloading ? 'spin-reverse-pulse' : ''"
      font-scale="3"
    ></b-icon>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsHead from "@/components/NewsHead.vue";
import EventServices from "@/services/EventServices";
const N = 10;

export default {
  name: "myPosts",
  components: {
    NewsHead,
  },
  data() {
    return { isloading: false, myPostsID: [], };
  },
  watch:{
    myPostsID: function(){
      this.mypLen = this.myPostsID.length;
      this.loadMyPostsH(this.$store.state.cursor);
    }
  },
  mounted(){
    if(this.$store.state.cursor == 0)
      this.loadMyPostsId();
  },
  methods: {
    loadMore: function(){
      console.log(this, this.$store.state.fetchedMyPostsH)
      this.loadMyPostsH(this.$store.state.cursor);
    },
    refresh: function(){
      this.$store.commit("setCursor",0);
      this.$store.commit("dropMyPosts");
      this.loadMyPostsId();
    },
    loadMyPostsH: function(from){
      this.isloading = true;
      if(this.myPostsID.length == 0){ this.loadMyPostsId() }
      for(let i=from; i<from+N; i++){
        console.log("from" , from, from+N, i)
        if(i>=this.myPostsID.length) break;
        EventServices.newsH2(this.myPostsID[i]).then((res)=>{
          let r = res.data;
          let obj = { id: r._id, date: r.date, title: r.title, author: r.author, idC: r.counter, };
          this.$store.commit("addToMyPosts", obj);
        }).catch(()=>this.$vToastify.error("ops!"));
      }
      this.isloading = false;
      //this.$store.state.cursor += N;
      this.$store.commit("addToCursor", N);
    },
    loadMyPostsId: function () {
      EventServices.myposts(this.$store.state.token).then((res)=>{
        if(res.data)
          this.myPostsID = res.data.myposts;
    }).catch((e)=>{
      if (e.response) {
        this.$vToastify.error(e.response.data);
        if (e.response.status == 401) {
          this.$store.commit("logout");
          this.$router.push("/login");
        }
      } else this.$vToastify.error("ops!");
    });
    },
  },
};
</script>
