<template>
  <div class="login">
    <h1>Login</h1>
    <body>
      <img id="backgroundImg" src="" alt="" />
    </body>
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
        ><RouterLink to="/signup"> Create Account </RouterLink></a
      >
    </div>
  </div>
</template>

<script></script>

<style>
.text {
  margin-top: 1rem;
}
#login {
  margin-top: 1rem;
}
</style>
