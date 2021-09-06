<template>
<div class="text-center col-md-6 col-lg-3">
  <form class="form-signin">
      <h2 class="h3 mb-3 font-weight-normal">Create Account</h2>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""> <br/>

      <label for="inputName" class="sr-only">name</label>
      <input type="email" id="inputName" class="form-control" placeholder="Name" required="" autofocus=""> <br/>

      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""> <br/>

      <button class="btn btn-primary btn-block" @click="signup">Sign up</button>
  </form>
</div>
</template>

<script>
export default {
  name: "Signup",
  methods:{
    signup: function(){
      console.log('account created!');
      this.$router.push('/login');
    }
  },
};
</script>
