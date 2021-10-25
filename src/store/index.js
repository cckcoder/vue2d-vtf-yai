import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VideoServices from "@/services/VideoServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "test",
    error: null,
    videoData: [],
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData.username;
      localStorage.setItem("userData", JSON.stringify(userData));
    },
    SET_VIDEO_DATA(state, videoData) {
      state.videoData = videoData;
    },
    UPDATE_VIDEO_DATA(state, videoData) {
      state.videoData.push(videoData);
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
      axios
        .post(`http://localhost:3001/api/userprofiles/video/${data.userId}`, {
          data: data.videoInfo,
        })
        .then((resp) => {
          commit('UPDATE_VIDEO_DATA', resp.data)
        });
    },
    fetchVideoList({ commit }, userId) {
      console.log(commit);
      VideoServices.getVideoList(userId).then(({ data }) => {
        commit("SET_VIDEO_DATA", data);
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
    getUserId() {
      let userData = JSON.parse(localStorage.getItem("userData"));
      return userData.id;
    }
  },
  modules: {},
});
