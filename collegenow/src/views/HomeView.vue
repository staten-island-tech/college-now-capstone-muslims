<template>
  <accountButton />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
  <br />
  <img class="backgroundImage" src="" alt="" />
  <br />
  <div class="Posts">
    <RouterLink class="router" to="/posts"
      ><button>Posts <img src="" alt="" /></button
    ></RouterLink>
  </div>
  <br />
  <img class="slogan" src="" alt="" />
  <br />
  <RouterLink class="router" to="/login">
    <button class="login">Login</button>
  </RouterLink>
  <RouterLink class="router" to="/signup">
    <button class="signUp">Sign Up</button>
  </RouterLink>
</template>

<script>
import accountButton from "../components/accountButton.vue";
export default {
  components: {
    accountButton,
  },
};
</script>

<style></style>
