<template>
  <img
    class="backgroundImage"
    src="https://img.freepik.com/premium-photo/group-monkeys-standing-each-other-street-with-man-background-generative-ai_97167-5808.jpg"
    alt="Background image featuring a bunch of monkeys"
  />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button>
        <img
          src="https://i.im.ge/2024/05/24/KdEbs9.image.png"
          alt="Logo with a monkey wearing sunglasses"
        /></button
    ></RouterLink>
  </div>
  <div class="login">
    <h1>Login</h1>
    <form name="loginForm" @submit.prevent="handleLogin">
      <div class="loginForm">
        <h2 class="text">Username</h2>
        <div class="username">
          <input type="text" v-model="username" />
        </div>
        <h2 class="text">Password</h2>
        <div class="password">
          <input type="password" v-model="userPassword" />
        </div>
        <button type="submit" id="login">Log In</button>
      </div>
    </form>
    <div class="toSignUp">
      Don't have an account?<RouterLink to="/signup">Sign Up Here</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import router from "../router/index";
const authStore = useAuthStore();
const username = ref("");
const userPassword = ref("");

function handleLogin() {
  if (username.value !== "" && userPassword.value !== "") {
    authStore.login(username.value, userPassword.value);
  } else {
    alert("Please fill out all fields");
  }
}
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
