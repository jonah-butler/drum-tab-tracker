<template>
  <v-flex xs12>
    <Panel title="Tab">
      <div slot="main-content">
        <textarea
        readonly
        v-model="tab"
        ></textarea>
      </div>
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
    'tab',
  ],
};
</script>

<style scoped>

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

</style>
