<template>
  <div>
    <v-app>
      <v-main>
        <Lbbody />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Lbbody from "./Lbbody";

export default {
  name: "Home",

  components: {
    Lbbody,
  },
  data: () => ({}),
};
</script>
