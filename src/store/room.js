import RoomAPI from "../api/room";

const FETCHING_ROOMS = "FETCHING_ROOMS",
  FETCHING_ROOMS_SUCCESS = "FETCHING_ROOMS_SUCCESS",
  FETCHING_ROOMS_ERROR = "FETCHING_ROOMS_ERROR";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    error: null,
    rooms: []
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    error(state) {
      return state.error;
    },
    hasRooms(state) {
      return state.rooms.length > 0;
    },
    rooms(state) {
      return state.rooms;
    },
    count(state) {
      return state.rooms.length;
    }
  },
  mutations: {
    [FETCHING_ROOMS](state) {
      state.isLoading = true;
      state.error = null;
      state.rooms = [];
    },
    [FETCHING_ROOMS_SUCCESS](state, posts) {
      state.isLoading = false;
      state.error = null;
      state.rooms = posts;
    },
    [FETCHING_ROOMS_ERROR](state, error) {
      state.isLoading = false;
      state.error = error;
      state.rooms = [];
    }
  },
  actions: {
    async findAll({ commit }) {
      commit(FETCHING_ROOMS);
      try {
        let response = await RoomAPI.findAll();
        commit(FETCHING_ROOMS_SUCCESS, response.data);

        response.data.map(el => {
          el.field_equipment = el.field_equipment
            .split(",")
            .map(item => item.trim());
          el.field_images = el.field_images.split(",").map(item => item.trim());

          return el;
        });

        return response.data;
      } catch (error) {
        commit(FETCHING_ROOMS_ERROR, error);
        return null;
      }
    }
  }
};
