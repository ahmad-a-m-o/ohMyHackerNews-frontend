<template>
  <b-overlay :show="this.isloading" rounded="sm">
  <div class="myposts">
   <div
      v-for="{ id, idC, date, title, author } in this.$store.state.fetchedMyPostsH"
      :key="idC"
    >
      <NewsHead :id="id" :idC="idC" :date="date" :title="title" :author="author" :showLikeBtn="false" />
    </div>
    <div class="d-flex justify-content-center">
      <b-button
        class="btn-sm btn-block mb-2"
        variant="outline-secondary"
        @click="loadMore"
        v-if="this.$store.state.fetchedMyPostsH.length<this.myPostsID.length">
        more
      </b-button>
    </div>
    <b-icon
      @click="refresh"
      icon="arrow-counterclockwise"
      class="fixed-bottom m-3 ripple"
      :animation="this.isloading ? 'spin-reverse-pulse' : ''"
      font-scale="3"
    ></b-icon>
  </div>
  </b-overlay>
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
    loadMyPostsH: async function(from){
      this.isloading = true;
      if(this.myPostsID.length == 0) this.loadMyPostsId();
      try{
        for(let i=from; i<from+N; i++){
          if(i>=this.myPostsID.length) break;
          await EventServices.newsH2(this.myPostsID[i]).then((res)=>{
            let r = res.data;
            let obj = { id: r._id, date: r.date, title: r.title, author: r.author, idC: r.counter, likes: r.likes, };
            this.$store.commit("addToMyPosts", obj);
          }).catch(()=>this.$vToastify.error("ops!"));
        }
      }finally{
        this.isloading = false;
        this.$store.commit("addToCursor", N);
      }
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
