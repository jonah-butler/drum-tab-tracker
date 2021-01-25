<template>
    <v-container>
        <Panel title="Songs">
          <v-btn
          slot="action"
          fab
          @click="navigate({name: 'song-create'})"
          elevation="2"
          dark
          >
          <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
          <v-container slot="main-content">
            <div class="song"
            :key="song.id"
            v-for="song in songs">
            <v-layout>
              <v-flex xs6 class="song-details">
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-album">
                  {{ song.album }}
                </div>
                <div class="song-genre">
                  {{ song.genre }}
                </div>
                <v-btn
                @click="navigate({
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                  })"
                elevation="2"
                dark
                >
                Read More
              </v-btn>
              </v-flex>
              <v-flex xs6>
                <img :src="song.albumImage" alt="" class="song-album-image">
              </v-flex>
            </v-layout>
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
    this.songs = (await SongsService.index()).data;
  },
  methods: {
    async navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.song{
  overflow: hidden;
}

.song-details{
  align-self: center;
}

.song-title{
  font-size: 40px;
  line-height: 1;
}

.song-album{
  font-size: 20px;
}

.song-artist{
  font-size: 25px;
}

.song-genre{
  font-size: 14px;
}

.song-album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
