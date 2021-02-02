<template>
  <v-flex xs6>
    <Panel title="Song Meta">
      <v-layout slot="main-content">
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
    </Panel>
    </v-flex>
</template>

<script>
import Panel from '@/components/Panel.vue';

export default {
  components: {
    Panel,
  },
  props: [
    'song',
  ],
};
</script>

<style>

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

</style>
