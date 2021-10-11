import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'test',
    error: null,
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData.username;
      localStorage.setItem('userData', JSON.stringify(userData))
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
          commit('SET_USER', resp.data.userData[0])
        })
        .catch((error) => {
          console.log('**********')
          // TODO set error msg
          console.log(error.response.status)
          console.log('**********')
        });
    },
  },
  modules: {},
});
