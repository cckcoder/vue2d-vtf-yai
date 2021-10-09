<template>
  <div>
  <v-app>
    <Lbnavbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Lbfooter/>
  </v-app>
  
  </div>
</template>

<script>
import Lbnavbar from './views/Lbnavbar'
import Lbfooter from './views/Lbfooter'
export default {
  name: 'App',

  components: {
    Lbnavbar,Lbfooter
  },

  data: () => ({
    //
  }),
};
</script>
