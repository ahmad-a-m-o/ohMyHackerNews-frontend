<template>
  <b-overlay :show="this.isloading" rounded="sm">
  <div class="home">
    <b-icon
      @click="refresh"
      icon="arrow-counterclockwise"
      class="fixed-bottom m-3 ripple"
      :animation="this.isloading ? 'spin-reverse-pulse' : ''"
      font-scale="3"
    ></b-icon>
    <div
      v-for="{ id, idC, date, title, author, likes } in this.$store.state
        .fetchedNewsHeader"
      :key="idC"
    >
      <NewsHead
        :id="id"
        :date="date"
        :title="title"
        :author="author"
        :idC="idC"
        :likes="likes"
        :showLikeBtn="true"
      />
    </div>
    <div class="d-flex justify-content-center">
      <b-button block
        class="btn-sm mb-2"
        variant="outline-secondary"
        @click="loadMore"
        v-if="!this.isloading"
      >
        more
      </b-button>
    </div>
  </div>
  </b-overlay>
</template>

<script>
// @ is an alias to /src
import NewsHead from "@/components/NewsHead.vue";
import EventServices from "@/services/EventServices";
const N = 10; // load N news in each time

export default {
  name: "Home",
  components: {
    NewsHead,
  },
  data() {
    return { isloading: false };
  },
  mounted() {
    if (this.$store.state.m_counter == 1) this.loadMore();
  },
  methods: {
    refresh: function () {
      this.$store.commit("set_m_counter", 1);
      this.$store.commit("dropNewsHeaders");
      this.loadMore();
    },
    loadMore: function () {
      this.isloading = true;
      EventServices.newsH(N, this.$store.state.m_counter)
        .then((res) => {
          res.data.forEach((r) => {
            let obj = {
              id: r._id,
              date: r.date,
              title: r.title,
              author: r.author,
              idC: r.counter,
              likes: r.likes,
            };
            this.$store.commit("addNewsHeder", obj);
          });
        })
        .catch((e) => {
          this.$vToastify.error(e.toString());
        })
        .finally(() => {
          this.isloading = false;
          this.$store.commit("m_counter_pp");
        });
    },
  },
};
</script>
