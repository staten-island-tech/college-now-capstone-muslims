<template>
  <div></div>
</template>

<script>
import editProfile from "../components/updatePfp.vue"
export default {
    methods: {
        async createProfile() {
    try {
      const res = await fetch("http://localhost:5173/createProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const user = await res.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  },

  async profiles(username, password) {
    try {
      const res = await fetch("http://localhost:5173/profiles", {
        method: "DEL",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const user = await res.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  },

  async updateProfiles() {
    try {
      const res = await fetch("http://localhost:5173/updateProfiles/:id", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const user = await res.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  },

  async deleteProfiles() {
    try {
      const res = await fetch("http://localhost:5173/deleteProfiles/:id", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const user = await res.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  },
};
};
</script>

<style lang="scss" scoped></style>
