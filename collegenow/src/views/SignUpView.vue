<template>
  <div class="signUp">
    <h1 class="title">Sign Up</h1>
    <form class="signUpForm">
      <h2 class="text">Email</h2>
      <div class="email">
        <input type="email" id="email" />
      </div>
      <h2 class="text">Please enter your birthday</h2>
      <div class="age"><input type="date" /></div>
      <h2 class="text">Please enter your location (State and City)</h2>
      <div class="location"><input type="text" /></div>
      <h2 class="text">Password</h2>
      <div class="password">
        <input type="password" id="password" />
      </div>
      <h2 class="text">Re-enter Password</h2>
      <div class="password">
        <input type="password" id="confirm" />
      </div>
      <input type="submit" value="Sign Up" id="submit" @click="signup" />
    </form>
    <div class="toLogin">
      Already have an account?
      <a><RouterLink to="/login">Login here</RouterLink></a>
    </div>
  </div>
  <img class="backgroundImage" src="" alt="" />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
</template>

<script>
// put a method for checking if they are above the age of 18
</script>

<style></style>
