<template>
  <div class="myposts">
    <div v-for="{id,date,title,author} in this.$store.state.fetchedNewsHeader" :key="id">
      <NewsHead :id="id" :date="date" :title="title" :author="author"/>
    </div>
    <div class="d-flex justify-content-center">
      <b-button  class="btn-sm btn-block mb-2" variant="outline-secondary" @click="loadMore" v-if="!this.isloading && this.loadedPostsCount<this.postsCount"> more </b-button>
      <b-spinner class="mb-5" style="width: 3rem; height: 3rem; center" label="Large Spinner" type="grow" v-if="this.isloading"></b-spinner>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsHead from "@/components/NewsHead.vue";

export default {
  name: "myPosts",
  components: {
    NewsHead,
  },
  data(){
    return {isloading: false, postsCount: 3, loadedPostsCount: 0};
  },
  methods:{
    loadMore: function(){
      this.isloading = true;
      setTimeout( ()=>{
          this.$store.commit("addNewsHeder",{id:Math.random(), title:"title of news", author:"noone", date:"12-12-2020 12:12"});
          this.loadedPostsCount += 1;
          this.isloading = false;
      },1000);
    },
  }
};
</script>
