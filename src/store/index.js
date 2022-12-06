import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import User from "./user";
import Shared from "./shared";

export default new Vuex.Store({
  modules: {
    User,
    Shared,
  },
});
