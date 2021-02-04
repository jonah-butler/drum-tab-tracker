<template>
  <v-container>
    <Panel title="Add Song">
            <div slot="main-content">
            <v-form>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="song.title"
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Artist"
            required
            :rules="[required]"
            v-model="song.artist"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="song.genre"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="song.album"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Album Image Href"
            required
            :rules="[required]"
            v-model="song.albumImage"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            label="Youtube Id"
            required
            :rules="[required]"
            v-model="song.youtubeId"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-textarea
            label="Drum Tab"
            required
            :rules="[required]"
            v-model="song.tab"
            multi-line
          ></v-textarea>
        </v-col>
      </v-row>
      <div class="error" v-if="error">{{ error }}</div>
      <!-- <div class="success" v-if="success">{{ success }}</div> -->
      <v-btn
      @click="save"
      elevation="2"
      dark
      >
      Update Song
      </v-btn>
     </v-form>
      </div>
    </Panel>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel.vue';
import SongService from '@/services/SongsServices';

export default {
  name: 'CreateNewSong',
  components: {
    Panel,
  },
  data() {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImage: '',
        youtubeId: '',
        tab: '',
      },
      error: null,
      required: (value) => !!value || 'Required',
    };
  },
  async mounted() {
    this.song = (await SongService.show(this.$store.state.route.params.songId)).data;
  },
  methods: {
    async save() {
      this.error = null;
      const allSongFields = Object
        .keys(this.song)
        .every((key) => !!this.song[key]);
      if (!allSongFields) {
        this.error = 'Please fill in all required fields';
        return;
      }
      try {
        const resp = await SongService.put(this.song);
        console.log(resp);
        this.$router.push({
          name: 'songs',
          params: {
            songId: this.$store.state.route.params.songId,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  props: [
    'songId',
  ],
};
</script>

<style lang="css" scoped>
  form{
    padding: 20px;
  }
</style>
