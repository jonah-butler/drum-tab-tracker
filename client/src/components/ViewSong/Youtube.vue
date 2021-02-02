<template>
  <v-flex xs6>
    <Panel title="Youtube">
      <v-layout slot="main-content">
        youtube embed
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

</style>
