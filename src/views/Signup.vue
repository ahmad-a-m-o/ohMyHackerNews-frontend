<template>
  <div class="col-md-6 col-lg-4">
    <form class="form-signin">
      <h2 class="h3 mb-3 font-weight-normal">Create Account</h2>

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

      <label for="inputName" class="sr-only p-1">Name:</label>
      <input
        id="inputName"
        class="form-control"
        placeholder="Name"
        required=""
        autofocus=""
        v-model="name"
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

      <button class="btn btn-primary btn-block" @click="signup">Sign up</button>
    </form>
  </div>
</template>

<script>
import EventServices from "@/services/EventServices";

export default {
  name: "Signup",
  data() {
    return { email: "", name: "", password: "" };
  },
  methods: {
    signup: function () {
      EventServices.register(this.name, this.email, this.password)
        .then((res) => {
          if (res.data.password) {
            this.$vToastify.success("Account created");
            this.$router.push("/login");
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
