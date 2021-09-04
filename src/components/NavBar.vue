<template>
  <b-navbar toggleable="lg" type="dark" class="bg-dark">
    <b-navbar-brand href="#">`Oh My` Hacker News</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <router-link to="/"        class="text-secondary nav-link nav-item" exact-active-class="text-light"  >Home page</router-link>
            <router-link to="/login"   class="text-secondary nav-link nav-item" exact-active-class="text-light" v-show="!this.isLoggedIn">Login</router-link>
            <router-link to="/signup"  class="text-secondary nav-link nav-item" exact-active-class="text-light" v-show="!this.isLoggedIn">Sign up</router-link>
            <router-link to="/about"   class="text-secondary nav-link nav-item" exact-active-class="text-light"  >About us</router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <router-link to="/profile" class="text-secondary nav-link nav-item" exact-active-class="text-light" v-show="this.isLoggedIn" >Profile</router-link>
            <b-button v-if="this.isLoggedIn" class="btn btn-danger btn-sm m-1" @click="logout" >Logout</b-button>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import { mapState } from 'vuex'
export default {
    name: 'NavBar',
    methods:{
        logout: function(){
            this.$store.commit('logout');
            this.$router.push('/');
        },
    },
    computed: {
        ...mapState({
            isLoggedIn: 'isAuthtenticated'
        }),
    },
}
</script>