<template>
  <img
    class="backgroundImage"
    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/large-group-of-pet-animals-together-susan-schmitz.jpg"
    alt="background image featuring a bunch of pets"
  />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
  <div class="login">
    <h1>Login</h1>
    <form>
      <div class="loginForm">
        <h2 class="text">Email</h2>
        <div class="email">
          <input type="email" id="email" />
        </div>
        <h2 class="text">Password</h2>
        <div class="password">
          <input type="password" id="password" />
        </div>
        <input
          type="submit"
          value="Log In"
          id="login"
          @click="authStore.login(a, username, password)"
        />
      </div>
    </form>
    <div class="toSignUp">
      Don't have an account?<RouterLink to="/signup">Sign Up Here</RouterLink>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
export default {};
</script>

<style></style>
