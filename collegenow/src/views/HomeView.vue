<template>
  <accountButton @accountClick="checkUser" />
  <RouterLink class="router" to="/"
    ><button>
      <img
        class="logo"
        src="https://cdn.discordapp.com/attachments/1025570390656962642/1242347460450586716/PINDER.jpg?ex=664d81bc&is=664c303c&hm=d8e1c1546588c4ab3baa530a0a8f32753d2ca174b102fc6b18a7f7be34418658&"
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
      if (authStore.currentUser === null) {
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
