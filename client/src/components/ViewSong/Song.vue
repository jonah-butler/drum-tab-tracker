<template>
  <v-layout>
  <SongMeta :song="song"/>
  <Youtube :youtubeId="song.youtubeId"/>
  <SongTab :tab="song.tab"/>
  </v-layout>
</template>

<script>
import SongMeta from './SongMeta.vue';
import Youtube from './Youtube.vue';
import SongTab from './SongTab.vue';

export default {
  components: {
    SongMeta,
    Youtube,
    SongTab,
  },
  props: [
    'song',
  ],
};
</script>

<style scoped>

</style>
