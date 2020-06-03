import Vue from "vue";
import Vuex from "vuex";
import RoomModule from "./room";
import AuthModule from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    room: RoomModule
  }
});
