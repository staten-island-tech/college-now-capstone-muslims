import { defineStore } from "pinia";
export const profileStore = defineStore({
  id: "profile",
  state: () => {
    return {
      pfp: null,
    };
  },
  actions: {
    havePfp() {},
  },
});
