<template>
  <v-toolbar
    fixed
    dark
  >
    <v-toolbar-title>
      <span
      class="home"
      @click="navigateTo({to: '/'})">
        TabTracker
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items> -->
      <v-btn
      @click="navigateTo({to: 'songs'})"
      depressed>
      Browse
      </v-btn>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items> -->
        <v-btn depressed
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({to: 'login'})"
        >Login</v-btn>
        <v-btn depressed
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({to: 'register'})">
        Sign Up
        </v-btn>
        <v-btn
        @click="logout"
        v-if="$store.state.isUserLoggedIn"
        depressed>
        Logout
        </v-btn>
      <!-- </v-toolbar-items> -->
    <!-- </v-toolbar-items> -->
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route.to);
    },
    logout() {
      this.$store.dispatch('setUser', null);
      this.$store.dispatch('setToken', null);
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style lang="css" scoped>
.home{
  cursor: pointer;
  transition: opacity .3s ease;
  opacity: 1;
}

.home:hover{
  opacity: 0.7;
}
</style>
