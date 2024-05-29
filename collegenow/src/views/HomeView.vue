<template>
  <div class="header">
    <div class="nav-links">
      <RouterLink class="logo-router" to="/"
        ><button>
          <img
            class="logo"
            src="https://i.im.ge/2024/05/24/KdEbs9.image.png"
            alt="Logo with a monkey wearing sunglasses"
          /></button
      ></RouterLink>
      <RouterLink class="login-router" to="/login" v-if="authStore.currentUser === null">
        <button class="login">Login</button>
      </RouterLink>
      <RouterLink class="signup-router" to="/signup" v-if="authStore.currentUser === null">
        <button class="signUp">Sign Up</button>
      </RouterLink>
    <div class="actions">
      <RouterLink class="posts-router" to="/posts" @click="checkUser">
        <button class="posts">Posts</button>
      </RouterLink>
      <accountButton class="account-button", @accountClick="checkUser" />
    </div>
    </div>
  </div>
  <img
      class="backgroundImage"
      src="https://img.freepik.com/premium-photo/group-monkeys-standing-each-other-street-with-man-background-generative-ai_97167-5808.jpg"
      alt="Background image featuring a bunch of monkeys"
    />
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
      if (authStore.currentUser === null) {
        router.push("login");
      }
    },
  },
};
</script>

<style scoped>
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.logo-router {
  flex-grow: 1;
  text-align: left;
}

.logo {
  height: 30px; /* Smaller logo size */
  margin-right: 10px;
}

.nav-links {
  display: flex;
  gap: 10px;
  align-items: center;
}

.actions {
  display: flex;
  gap: 10px;
}

.login,.signUp {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
}

.posts,.account-button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  
}

.content-start {
  margin-top: 60px; 
}
</style>
