import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from '@/store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import 'firebase/firestore'
import firebase from "firebase/app"
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

var firebaseConfig = {
  apiKey: "AIzaSyApPCSLHs8nZySR267zmFLxzOGEDPLK7C0",
  authDomain: "vue2d-vtf-82c3d.firebaseapp.com",
  projectId: "vue2d-vtf-82c3d",
  storageBucket: "vue2d-vtf-82c3d.appspot.com",
  messagingSenderId: "537954887481",
  appId: "1:537954887481:web:9a72f767f7fe8093adaae8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
