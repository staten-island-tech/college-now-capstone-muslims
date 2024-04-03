<template>
  <header>
    <div>
      <nav>
        <div class="Login">
          <RouterLink class="router" v-if="!loggedin" to="/login"
            >Login</RouterLink
          >
          <button v-if="loggedin" @click="logOut">Log Out</button>
        </div>
        <div class="home">
          <RouterLink> <img id="logo" src="" alt="" /> </RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView @loggedin="login" />
</template>

<script>
const { Router } = require("express");
</script>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 2.5px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav:hover .router {
  color: #575757;
}
nav:hover .router:hover {
  color: white;
  box-shadow: 0 2px 0 0 currentColor;
}

.login {
}
</style>
