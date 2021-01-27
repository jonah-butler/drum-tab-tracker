<template>
  <v-layout>
    <v-flex xs6>
    <Panel title="Song">
      <div slot="main-content">
                    <v-layout>
              <v-flex xs6 class="song-details">
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-genre">
                  {{ song.genre }}
                </div>
              </v-flex>
              <v-flex xs6>
                <img :src="song.albumImage" alt="" class="song-album-image">
                <div class="song-album">
                  {{ song.album }}
                </div>
              </v-flex>
            </v-layout>
      </div>
    </Panel>
    </v-flex>
    <v-flex xs6>
      <Panel title="Youtube">
        <div slot="main-content">
          youtube embed
        </div>
      </Panel>
    </v-flex>
    <v-layout>
      <v-flex xs12>
        <Panel title="Tab">
          <div slot="main-content">
            <textarea
            readonly
            v-model="song.tab"
            ></textarea>
          </div>
        </Panel>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsServices';
import Panel from '@/components/Panel.vue';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      song: {},
    };
  },
  async mounted() {
    this.song = (await SongService.show(this.$store.state.route.params.songId)).data;
    console.log(this.song);
  },
};
</script>

<style scoped>
.song{
  overflow: hidden;
  margin-bottom: 45px;
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

textarea{
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}

.layout{
  flex-wrap: wrap !important;
}

</style>
