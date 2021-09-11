<template>
  <div class="card mb-4">
    <div class="card-header">this is profie page</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        your posts are here: <router-link to="/myposts">my Posts</router-link>
        <br />
        ============================= <br />
        this is your token: <br />
        {{ this.$store.state.token }} <br />
        ============================= <br />
        <footer class="blockquote-footer">
          dont share your token with others!!
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>
