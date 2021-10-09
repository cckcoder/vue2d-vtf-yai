<template>
  <div>
  <v-app>
   
    <v-content>
      <Lbbody/>
    </v-content>
    <v-btn 
    @click="addProfile"
    rounded class="regbut" 
    color="yellow darken-2 white--text uppercase"
    > Add Profile </v-btn>
  </v-app>

  {{ profile_db }}
  </div>
</template>

<script>
// import Lbnavbar from './Lbnavbar'
import Lbbody from './Lbbody'
import {db} from '../main'
// import Lbfooter from './Lbfooter'
export default {
  name: 'Home',

  components: {
    Lbbody,
  },



  data: () => ({
    profile_db: []
  }),
    firestore() {
    return {
      profile_db: db.collection('profile')
    }
  },
  methods: {
    addProfile () {
      db.collection('profile').add({
        firstName: 'viewaaa',
        lastName: 'viewbbb',
        phonNumber: '1150',
      })
      .then(() => {
        alert('Profile create successful')
      }
      )
    }
  },
};
</script>
