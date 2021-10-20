import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "test",
    error: null,
    videoData: []
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData.username;
      localStorage.setItem("userData", JSON.stringify(userData));
    },
    UPDATE_VIDEO_DATA(state, videoData) {
      state.videoData.push(videoData)
    }
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
          commit("SET_USER", resp.data.userData[0]);
        })
        .catch((error) => {
          console.log("**********");
          // TODO set error msg
          console.log(error.response.status);
          console.log("**********");
        });
    },
    addVideoInfo({ commit }, data) {
      console.log(commit);

      axios
        .post(`http://localhost:3001/api/userprofiles/video/${data.userId}`, {
          data: data.videoInfo,
        })
        .then((resp) => {
          console.log("**********");
          console.log(resp);
          console.log("**********");
        });
    },
  },
  getters: {
    getUserName() {
      let userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        return userData.username;
      }
    },
  },
  modules: {},
});
