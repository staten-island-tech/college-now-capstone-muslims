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

    async createProfile(initialTempEmail, initialTempUsername) {
      try {
        const res = await fetch("http://localhost:3000/createProfile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            intitalEmail: initialTempEmail,
            intitalUsername: initialTempUsername
          }),
        });
        const user = await res.json();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
    async updateProfiles(updatedUsername, updatedPhoneNumber, updatedDescription, updatedLocation) {
      try {
        const res = await fetch("http://localhost:3000/updateProfiles/:id", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: updatedUsername,
            phoneNumber: updatedPhoneNumber,
            description: updatedDescription,
            location: updatedLocation,
          }),
        });
        const user = await res.json();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
