import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      isLiked: true,
      isReset: false,
      user: {
        name: "",
        age: null,
      },
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    like(state) {
      state.isLiked = !state.isLiked;
      if (state.isLiked) {
        state.count++;
      } else {
        state.count--;
      }
    },
    reset(state) {
      state.isReset = !state.isReset;
      state.count = 0;
    },
    setUser(state, name) {
      state.user.name = name;
    },
  },
  getters: {
    statusMessage(state) {
      return state.isLiked ? "You liked the post" : "You unliked the post";
    },
    doubleCount(state) {
      return state.count * state.count;
    },
    greetingMessage(state) {
      return `Hello ${state.user.name}, You are ${state.user.age} old`;
    },
    isAdult(state) {
      return state.user.age < 18 ? `Minor` : `Adult`;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        commit("setUser", response.data.name);
      } catch (err) {
        console.error('error fetching data: ',err.message)
      }
    },
  },
});

export default store;
