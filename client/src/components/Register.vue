<template>
  <div>
    <h1>Register</h1>
    <input type="email"
    name="email"
    v-model="email"
    placeholder="email">
    <br>
    <input type="password"
    name="password"
    v-model="password"
    placeholder="password">
    <br>
    <div class="error" v-if="error">{{ error }}</div>
    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'RegisterUser',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async register() {
      try {
        const resp = await AuthService.register({
          email: this.email,
          password: this.password,
        });
        if (resp.data.error) {
          this.error = resp.data.error;
          console.log('error', resp.data.error);
        }
      } catch (error) {
        this.error = error.response;
      }
    },
  },
  props: { },
};
</script>

<style scoped>
.error{
  color: red;
}
</style>
