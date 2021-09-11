<template>
  <div class="col-md-6 col-lg-4">
    <b-form >
      <h2 class="h3 mb-3 font-weight-normal">Login page</h2>

      <label for="inputEmail" class="sr-only p-1">Email address:</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
        v-model="email"
      />
      <br />

      <label for="inputPassword" class="sr-only p-1">Password:</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
        v-model="password"
      />
      <br />

      <button class="btn btn-primary btn-block" @click="login">Sign in</button>
    </b-form>
  </div>
</template>

<script>
import EventServices from "@/services/EventServices";

export default {
  name: "Login",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login: function () {
      // to login
      EventServices.login(this.email, this.password)
        .then((res) => {
          if (res.data.token) {
            this.$vToastify.success("Logen in");
            this.$store.commit("login", res.data.token);
            this.$router.push("/");
          } else {
            this.$vToastify.error("Unknown error");
          }
        })
        .catch((e) => {
          if (e.response.data) this.$vToastify.error(e.response.data);
          else this.$vToastify.error("Unknown error");
        });
    },
  },
};
</script>
