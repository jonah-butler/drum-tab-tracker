<template>
  <v-container>
    <Panel title="Login">
      <div slot="main-content">
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
            >
            </v-text-field>
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
            >
            </v-text-field>
          </v-col>
        </v-row>
        <div class="error"
        v-if="error">
        {{ error }}
        </div>
        <div class="success"
        v-if="success">
        {{ success }}
        </div>
        <v-btn
        @click="login"
        elevation="2"
        dark
        >
        Login
        </v-btn>
        </v-form>
      </div>
    </Panel>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService';
import Panel from '@/components/Panel.vue';

export default {
  name: 'RegisterUser',
  components: {
    Panel,
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
          console.log(resp);
          this.$store.dispatch('setToken', resp.data.token);
          this.$store.dispatch('setUser', resp.data.user);
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
