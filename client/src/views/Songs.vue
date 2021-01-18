<template>
    <v-container>
        <Panel title="Songs">
          <v-container slot="main-content">
            <div class="artist"
            :key="song.title"
            v-for="song in songs">
              <h1>{{ song.title }}</h1>
              <h3>{{ song.artist }}</h3>
              <p>{{ song.album }}</p>
            </div>
          </v-container>
        </Panel>
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
    this.songs = await SongsService.index();
    console.log(this.songs);
  },
};
</script>

<style scoped>
.artist{
  text-align: left;
}
</style>
