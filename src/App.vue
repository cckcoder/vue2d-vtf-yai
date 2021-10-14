<template>
  <div>
    <v-app>
      <template v-if="!getUserName">
        <Lbnavbar />
      </template>

      <v-main>
        <router-view></router-view>
      </v-main>
      <Lbfooter />
    </v-app>
  </div>
</template>

<script>
import Lbnavbar from "./views/Lbnavbar";
import Lbfooter from "./views/Lbfooter";
import { mapState, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Lbnavbar,
    Lbfooter,
  },
  data: () => ({}),
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["getUserName"]),
  },
};
</script>
