<template>
  <v-flex xs6>
    <Panel title="Youtube">
      <v-layout slot="main-content">
        <youtube
        :video-id="youtubeId">
        </youtube>
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
    'youtubeId',
  ],
};
</script>

<style>

</style>
