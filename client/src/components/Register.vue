<template>
  <v-container>
    <Panel title="Register">
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
            autocomplete="new-password"
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
      @click="register"
      elevation="2"
      dark
      >
        Register
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
    async register() {
      try {
        const resp = await AuthService.register({
          email: this.email,
          password: this.password,
        });
        if (resp.data.error) {
          this.error = resp.data.error;
          console.log('error', resp.data.error);
        } else {
          this.success = 'account created';
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
