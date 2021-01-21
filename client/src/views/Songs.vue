<template>
    <v-container>
        <Panel title="Songs">
          <v-container slot="main-content">
            <div class="artist"
            :key="song.id"
            v-for="song in songs">
              <h1>{{ song.title }}</h1>
              <h3>{{ song.artist }}</h3>
              <p>{{ song.album }}</p>
            </div>
          </v-container>
        </Panel>
        <v-btn
        @click="postSong()"
        elevation="2"
        dark
        >
        New Song
      </v-btn>
    </v-container>
</template>

<script>
import Panel from '@/components/Panel.vue';
import SongsService from '@/services/SongsServices';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      songs: null,
    };
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
  },
  methods: {
    async postSong() {
      this.$router.push({
        path: '/songs/add',
      });
    },
  },
};
</script>

<style scoped>
.artist{
  text-align: left;
}
</style>
