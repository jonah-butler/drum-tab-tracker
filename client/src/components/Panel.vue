<template>
    <v-container>
        <v-card>
            <v-toolbar flat dark>
                <v-toolbar-title class="white--text">
                    <h1>{{title}}</h1>
                </v-toolbar-title>
                <slot name="action" />
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <slot name="main-content">
                No slot content defined
            </slot>
        </v-card>
    </v-container>
</template>

<script>
export default {
  props: [
    'title',
  ],
};
</script>

<style>

</style>
