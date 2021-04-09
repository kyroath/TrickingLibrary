<template>
  <v-app dark>
    <v-app-bar app dense>
      <v-toolbar-title>Tricking Library</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn depressed @click="toggleActivity"> Upload </v-btn>
    </v-app-bar>

    <VideoUpload></VideoUpload>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import VideoUpload from "../components/video-upload";

export default {
  methods: mapMutations("video-upload", ["toggleActivity"]),
  components: {
    VideoUpload,
  },
};
</script>
