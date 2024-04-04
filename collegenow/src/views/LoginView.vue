<template>
  <img class="backgroundImage" src="" alt="" />
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
        <input type="submit" value="Log In" id="login" @click="login" />
      </div>
    </form>
    <div class="toSignUp">
      Don't have an account?<a
        ><RouterLink to="/signup"> Sign Up Here</RouterLink></a
      >
    </div>
  </div>
</template>

<script></script>

<style></style>
