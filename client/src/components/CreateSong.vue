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
            v-model="song.tab"
            multi-line
          ></v-textarea>
        </v-col>
      </v-row>
      <!-- <div class="error" v-if="error">{{ error }}</div>
      <div class="success" v-if="success">{{ success }}</div> -->
      <v-btn
      @click="addSong"
      elevation="2"
      dark
      >
      Add Song
      </v-btn>
     </v-form>
      </div>
    </Panel>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel.vue';
import SongsService from '@/services/SongsServices';

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
    };
  },
  methods: {
    async addSong() {
      try {
        await SongsService.post(this.song);
        this.$router.push({
          name: 'songs',
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="css" scoped>
  form{
    padding: 20px;
  }
</style>
