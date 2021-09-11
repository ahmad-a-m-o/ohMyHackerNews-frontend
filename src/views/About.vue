<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 v-text="chert"></h1>
    <form class="form-inline">
      <div class="form-group mx-sm-3 mb-2">
        <b-input
          type="number"
          class="form-control"
          placeholder="number"
          v-model="chert"
        />
      </div>
      <b-button class="btn btn-primary mb-2" @click="incChert"
        >Increase me!</b-button
      >
    </form>
    <b-card> 5 times chert is equal {{ 5 * chert }}</b-card>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      chert: 0,
    };
  },
  methods: {
    incChert() {
      this.chert = Number(this.chert) + 2;
    },
  },
};
</script>
