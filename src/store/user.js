import AuthModule from "../api/user";

const AUTH_REQUEST = "AUTH_REQUEST",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_ERROR = "AUTH_ERROR";

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem("user-token") || "",
    status: ""
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    authStatus(state) {
      return state.status;
    }
  },
  mutations: {
    [AUTH_REQUEST]: state => {
      state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, token) => {
      state.status = "success";
      state.token = token;
    },
    [AUTH_ERROR]: state => {
      state.status = "error";
    }
  },
  actions: {
    async authAdmin({ commit }) {
      commit(AUTH_REQUEST);

      try {
        let response = await AuthModule.authAdmin();
        commit(AUTH_SUCCESS, response);
        localStorage.setItem("user-token", response.data.csrf_token);
        return response.data;
      } catch (error) {
        commit(AUTH_ERROR, error);
        localStorage.removeItem("user-token");
        return null;
      }
    }
  }
};
