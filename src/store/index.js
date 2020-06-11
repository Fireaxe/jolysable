import Vue from "vue";
import Vuex from "vuex";
import RoomModule from "./room";
import CarouselModule from "./carousel";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    room: RoomModule,
    carousel: CarouselModule
  }
});
