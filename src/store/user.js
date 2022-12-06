import axios from "axios";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },

  mutations: {
    setUser(state, user, token) {
      state.user = user;
      state.token = token;
    },

    logout(state) {
      state.user = null;
      state.token = "";
    },
  },

  actions: {
    async register({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.post("/api/users/register", payload);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async login({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.post("/api/users/login", payload);
        commit("setLoading", false);
        const token = res.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("setUser", res.data.user, token);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    logout({ commit }) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      commit("logout");
    },
  },

  getters: {
    user: (state) => state.user,
    isAuth: (state) => !!state.user,
  },
};
