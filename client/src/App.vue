<template>
  <div id="app">
    <v-app>
      <main>
        <PageHeader/>
        <router-view/>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue';

export default {
  name: 'app',
  components: {
    PageHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html{
  overflow-y: auto !important;
}

.v-text-field__slot > label{
  right: auto !important;
  left: 0px !important;
}

.layout{
  flex-wrap: wrap !important;
  justify-content: center;
}
</style>
