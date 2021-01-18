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
      <v-btn depressed>Browse</v-btn>
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
        <v-btn depressed>Logout</v-btn>
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
