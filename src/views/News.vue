<template>
  <div class="News">
    <div class="card-header">{{ this.title }}</div>
    <div class="card-body">
      <p class="h4">{{ this.content }}</p>
      <blockquote class="blockquote mb-0">
        <em class="blockquote-footer">
          Author: {{ this.author }}, Message id: {{ this.idC }} at
          {{ this.date }}
        </em>
      </blockquote>
    </div>
  </div>
</template>

<script>
import EventServices from "@/services/EventServices";

export default {
  name: "News",
  data() {
    return {
      idC: 0,
      author: "",
      title: "",
      date: "",
      content: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      EventServices.newsC(this.$route.params.id).then((res) => {
        this.idC = res.data.header.counter;
        this.author = res.data.header.author;
        this.title = res.data.header.title;
        this.date = res.data.header.date;

        this.content = res.data.content.content;
      });
    },
  },
};
</script>
