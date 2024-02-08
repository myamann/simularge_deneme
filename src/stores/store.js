import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    counter: 0,
    isUserPremium: true,
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
