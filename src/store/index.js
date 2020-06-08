import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "./user";
import RoomModule from "./room";
import CarouselModule from "./carousel";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    room: RoomModule,
    carousel: CarouselModule
  }
});
