<template>
<div class="ComposeNews">
  <form class="">
      <h2 class="h3 mb-3 font-weight-normal">Compose new News</h2>
      <b-input type="text" class="form-control" placeholder="Title" autofocus="" v-model="title"/> <br/>
      <b-textarea type="text" class="form-control" rows="10" placeholder="Content" autofocus="" v-model="content"/> <br/>
      <b-button class="btn btn-primary btn-block" @click="send">Send</b-button>
  </form>
</div>
</template>

<script>
export default {
  name: "ComposeNews",
  data(){
    return  { 
        enContent: '',
    };
  },
  computed:{
      content:{ get() {return this.$store.state.composeData.content}, set(value) {this.$store.commit("updateComposeData_content",value)}, },
      title:{   get() {return this.$store.state.composeData.title},   set(value) {this.$store.commit("updateComposeData_title",value)},   },
  },
  watch:{
      content: function(){this.enContent = btoa(this.$store.state.composeData.content)},  // create base64 of content
  },
  methods:{
      send: function(){
          console.log(this.title,this.enContent);
      },
  },
};
</script>
