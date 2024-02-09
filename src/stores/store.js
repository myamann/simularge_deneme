import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    username: "",
    email: "",
    isUserPremium: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
