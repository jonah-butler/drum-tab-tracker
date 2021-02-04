<template>
  <v-layout>
    <ViewSong :song="song"/>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsServices';
import ViewSong from '@/components/ViewSong/Song.vue';

export default {
  components: {
    ViewSong,
  },
  data() {
    return {
      song: {},
    };
  },
  async mounted() {
    console.log(this.$route);
    this.song = (await SongService.show(this.$store.state.route.params.songId)).data;
    console.log(this.song);
  },
};
</script>

<style scoped>

</style>
