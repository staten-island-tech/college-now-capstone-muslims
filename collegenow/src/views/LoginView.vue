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
        ><RouterLink to="/signup">Sign Up Here</RouterLink></a
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async login(a) {
      a.preventDefault();
      let userEmail = document.getElementById("email").value;
      let userPassword = document.getElementById("password").value;
      if (userEmail === "" || userPassword === "") {
        alert("Please fill out all fields");
      }
      // if userEmail or if userPassword don't match or if userEmail don't exist, write 2 else ifs
      else {
        signIn(supabase, userEmail, userPassword);
      }
    },
  },
};
async function login(username, password) {
  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        password: password,
      }),
    });
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>
