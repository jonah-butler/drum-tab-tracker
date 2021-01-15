<template>
  <!-- <v-layout column container>
    <div class="pl-4 pr-4 pb-2">
      <v-input>
      </v-input>
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
  </v-layout> -->
  <v-container>
  <v-card>
    <v-toolbar flat dark>
  <v-toolbar-title class="white--text">
      <h1>Login</h1>
  </v-toolbar-title>

  <v-spacer></v-spacer>
</v-toolbar>
    <v-divider></v-divider>
    <v-form>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Email"
            required
            v-model="email"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Password"
            required
            v-model="password"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="error" v-if="error">{{ error }}</div>
      <div class="success" v-if="success">{{ success }}</div>
      <v-btn
      @click="login"
      elevation="2"
      dark
      >
        Login
      </v-btn>

     </v-form>
  </v-card>
    </v-container>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'RegisterUser',
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
      success: '',
    };
  },
  methods: {
    async login() {
      try {
        const resp = await AuthService.login({
          email: this.email,
          password: this.password,
        });
        if (resp.data.error) {
          this.error = resp.data.error;
          console.log('error', resp.data.error);
        } else {
          this.success = 'login successful';
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
  form{
    padding: 20px;
  }
</style>
