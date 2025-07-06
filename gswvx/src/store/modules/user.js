import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      user: {
        name: "",
        username: "",
      },
    };
  },
  mutations: {
    setUser(state, {name, username}) {
      state.user.name = name;
      state.user.username = username;
    },
  },
  getters: {
    name: (state) => state.user.name,
    username: (state) => state.user.username,
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        commit("setUser", {
          name: response.data.name,
          username: response.data.username,
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
