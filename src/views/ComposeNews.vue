<template>
  <div class="ComposeNews">
    <form class="">
      <h2 class="h3 mb-3 font-weight-normal">Compose new News</h2>
      <b-input
        type="text"
        class="form-control"
        placeholder="Title"
        autofocus=""
        v-model="title"
      />
      <br />
      <b-textarea
        type="text"
        class="form-control"
        rows="10"
        placeholder="Content"
        autofocus=""
        v-model="content"
      />
      <br />
      <b-button class="btn btn-primary btn-block" @click="send">Send</b-button>
    </form>
  </div>
</template>

<script>
import EventServices from "@/services/EventServices";

export default {
  name: "ComposeNews",
  computed: {
    content: {
      get() {
        return this.$store.state.composeData.content;
      },
      set(value) {
        this.$store.commit("updateComposeData_content", value);
      },
    },
    title: {
      get() {
        return this.$store.state.composeData.title;
      },
      set(value) {
        this.$store.commit("updateComposeData_title", value);
      },
    },
  },
  methods: {
    clean: function () {
      this.$store.commit("cleanComposeData");
    },
    send: function () {
      EventServices.compose(this.title, this.content, this.$store.state.token)
        .then((res) => {
          if (res.data && res.data.status && res.data.status == "ok") {
            this.$vToastify.success("your news sent");
            this.clean();
          } else this.$vToastify.error("ops!");
        })
        .catch((e) => {
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
