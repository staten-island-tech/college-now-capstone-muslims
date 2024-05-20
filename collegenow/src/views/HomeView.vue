<template>
  <accountButton @accountClick="checkUser" />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
  <br />
  <img
    class="backgroundImage"
    src="https://img.freepik.com/premium-photo/group-monkeys-standing-each-other-street-with-man-background-generative-ai_97167-5808.jpg"
    alt="Background image featuring a bunch of monkeys"
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

<style>
.backgroundImage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
}
</style>
