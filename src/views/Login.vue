<template>
<div>
    <h3>Login page, to compelte...</h3>
    <div class="col-md-6 col-lg-4">
    <div class="login-wrap py-5">
    <div class="img d-flex align-items-center justify-content-center" style="background-image: url(images/bg.jpg);"></div>
    <h3 class="text-center mb-0">Welcome</h3>
    <p class="text-center">Sign in by entering the information below</p>
    <form action="#" class="login-form">
    <div class="form-group">
    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-user"></span></div>
    <input type="text" class="form-control" placeholder="Username">
    </div>
    <div class="form-group">
    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-lock"></span></div>
    <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group d-md-flex">
    <div class="w-100 text-md-right">
    <a href="#">Forgot Password</a>
    </div>
    </div>
    <div class="form-group">
    <button class="btn form-control btn-primary rounded px-3" @click="login">Get Started</button>
    </div>
    </form>
    <div class="w-100 text-center mt-4 text">
    <p class="mb-0">Don't have an account?</p>
    <router-link to="/signup">Sign up</router-link>
    </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Login",
  methods:{
    login: function(){
      // to login
      this.$store.commit('login', 'chert token');
      this.$router.push('/');
    },
  },
};
</script>