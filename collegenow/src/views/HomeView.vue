<template>
  <accountButton @accountClick="checkUser" />
  <RouterLink class="router" to="/"
    ><button>
      <img
        class="logo"
        src="https://i.im.ge/2024/05/24/KdEbs9.image.png"
        alt="Logo with a monkey wearing sunglasses"
      /></button
  ></RouterLink>
  <br />
  <img
    class="backgroundImage"
    src="https://img.freepik.com/premium-photo/group-monkeys-standing-each-other-street-with-man-background-generative-ai_97167-5808.jpg"
    alt="Background image featuring a bunch of monkeys"
  />
  <br />
  <div class="Posts">
    <RouterLink class="router" to="/posts" @click="checkUser"
      ><button>Posts<img src="" alt="" /></button
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
import router from "../router/index";
const authStore = useAuthStore();
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
      if (!authStore.isAuthenticated) {
        router.push("login");
      }
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
