<template>
  <div class="card mb-4">
    <div class="card-header"> Author: {{ this.author }} <Like v-if="this.showLikeBtn" style="float: right"/> </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        {{ this.title }} <br />
        <em class="blockquote-footer">
          Message id: {{ this.idC }} at {{ this.date }}
          <router-link
            :to="{ name: 'news', params: { id: this.id } }"
            style="position: absolute; right: 2%"
            >read more</router-link
          >
        </em>
      </blockquote>
    </div>
  </div>
</template>

<script>
import Like from '@/components/Like.vue';

export default {
  name: "NewsHead",
  components:{
    Like,
  },
  props: {
    id: String,
    idC: Number,
    author: String,
    title: String,
    date: String,
    likes: Array,
    showLikeBtn: Boolean,
  },
};
</script>
