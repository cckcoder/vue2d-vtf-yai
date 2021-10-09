<template>
  <div>
  <v-app>
    <Lbnavbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
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
