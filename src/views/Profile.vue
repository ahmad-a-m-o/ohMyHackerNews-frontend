<template>
  <div class="card mb-4">
    <div class="card-header">this is profie page</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        Welcome  {{this.$store.state.userInfo.name}}! <br/>
        User ID: {{this.$store.state.userInfo._id}}   <br/>
        Email:   {{this.$store.state.userInfo.email}} <br/>
        ============================= <br />
        your posts are here: <router-link to="/myposts">my Posts</router-link>
        <br />
        ============================= <br />
        this is your token: <br />
        {{ this.$store.state.token }} <br />
        ============================= <br />
        <em class="blockquote-footer">
          dont share your token with others!!
        </em>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>
