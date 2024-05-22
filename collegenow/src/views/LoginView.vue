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
          src="https://cdn.discordapp.com/attachments/1025570390656962642/1242347460450586716/PINDER.jpg?ex=664d81bc&is=664c303c&hm=d8e1c1546588c4ab3baa530a0a8f32753d2ca174b102fc6b18a7f7be34418658&"
          alt="Logo with a monkey wearing sunglasses"
        /></button
    ></RouterLink>
  </div>
  <div class="login">
    <h1>Login</h1>
    <form>
      <div class="loginForm">
        <h2 class="text">Username</h2>
        <div class="username">
          <input type="text" />
        </div>
        <h2 class="text">Password</h2>
        <div class="password">
          <input type="password" />
        </div>
        <button
          type="submit"
          id="login"
          @click="authStore.login(...loginCheck(a))"
        >
          Log In
        </button>
      </div>
    </form>
    <div class="toSignUp">
      Don't have an account?<RouterLink to="/signup">Sign Up Here</RouterLink>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
const authStore = useAuthStore();
const username = ref("");
const userPassword = ref("");
function loginCheck(a) {
  a.preventDefault();
  if (username.value === "" || userPassword.value === "") {
    alert("Please fill out all fields");
  } else {
    router.push("posts");
    return [userPassword.value, username.value];
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
