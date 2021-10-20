<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height" fluid>
        <v-row class="align-center">
          <v-btn v-for="link in links" :key="link" text>
            {{ link }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-avatar color="grey darken-1" size="32" class="ml-3">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3 pt-8">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="side in sideLink" :key="side" link>
                  <v-list-item-content>
                    <v-list-item-title> {{ side }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <AddCourse />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import AddCourse from "@/components/AddCourse";

export default {
  components: {
    AddCourse,
  },
  mounted() {
    this.$store.dispatch("fetchVideoList", this.getUserId);
  },
  data: () => ({
    links: ["Home", "Browse", "Profile"],
    sideLink: ["Category", "Skill"],
  }),
  computed: {
    ...mapGetters(["getUserId"]),
  },
};
</script>
