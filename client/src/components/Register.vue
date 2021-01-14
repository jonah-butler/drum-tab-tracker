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
      <h1>Register</h1>
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
      <v-btn
      @click="register"
      elevation="2"
      >
        Register
      </v-btn>

     </v-form>
  </v-card>
    </v-container>
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
  .v-card{
    padding: 20px;
  }
</style>
