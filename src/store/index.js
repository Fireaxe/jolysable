import Vue from "vue";
import Vuex from "vuex";
import RoomModule from "./room";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    room: RoomModule
  }
});
