<template>
  <div class="card mb-4">
    <div class="card-header">Author: {{ this.author }}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        {{ this.title }} <br />
        <em class="blockquote-footer">
          Message id: {{ this.id }} at {{ this.date }}
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
export default {
  name: "NewsHead",
  props: {
    id: String,
    idC: Number,
    author: String,
    title: String,
    date: String,
  },
};
</script>
