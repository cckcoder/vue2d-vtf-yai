import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { email: "viewThinnabol" },
    error: null,
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    registerAction({ commit }, userData) {
      axios.post("http://localhost:3001/api/userprofiles", {
        data: userData,
      });
      commit("SET_USER", userData.username);
    },
    loginAction({ commit }, userData) {
      axios
        .post("http://localhost:3001/api/userprofiles/login", {
          data: userData,
        })
        .then((resp) => {
          console.log(resp.data);
        });

      console.log(commit);
    },
  },
  modules: {},
});
