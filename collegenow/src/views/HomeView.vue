<template>
  <accountButton @click="checkUser" />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
  <br />
  <img
    class="backgroundImage"
    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/large-group-of-pet-animals-together-susan-schmitz.jpg"
    alt="background image featuring a bunch of pets"
  />
  <br />
  <div class="Posts">
    <RouterLink class="router" to="/posts" @click="checkUser"
      ><button>Posts <img src="" alt="" /></button
    ></RouterLink>
  </div>
  <br />
  <RouterLink class="router" to="/login" v-if="authStore.currentUser === null">
    <button class="login">Login</button>
  </RouterLink>
  <RouterLink class="router" to="/signup" v-if="authStore.currentUser === null">
    <button class="signUp">Sign Up</button>
  </RouterLink>
</template>

<script>
import accountButton from "../components/accountButton.vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
export default {
  setup() {
    return {
      authStore,
    };
  },
  components: {
    accountButton,
  },
  methods: {
    checkUser() {
      authStore.checkUser();
    },
  },
};
</script>

<style></style>
