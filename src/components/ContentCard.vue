<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://prod.degreedcdn.com/content/img/app/skills/dg-4.svg?v=1079624091246564"
      height="130px"
    ></v-img>

    <v-card-title class="text-truncate">
      {{ videoDescript }}
    </v-card-title>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ videoDescript }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    videoUrl: String,
    videoDescript: String,
  },
  data: () => ({
    show: false,
  }),
};
</script>
