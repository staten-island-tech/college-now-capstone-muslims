<template>
  <div class="signUp">
    <h1 class="title">Sign Up</h1>
    <form class="signUpForm">
      <h2 class="text">Email</h2>
      <div class="email">
        <input type="email" id="email" />
      </div>
      <h2 class="text">Please enter your birthday</h2>
      <div class="age"><input type="date" v-model="userBirthdate" /></div>
      <h2 class="text">Please enter your location (State and City)</h2>
      <div class="location"><input type="select" /></div>
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
export default {
  methods: {
    calculateAge(birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    async signup(e) {
      e.preventDefault();
      let userEmail = document.getElementById("email").value;
      let userPassword = document.getElementById("password").value;
      let confirmed = document.getElementById("confirm").value;
      if (userEmail === "" || userPassword === "" || confirmed === "") {
        alert("Please fill out all fields");
      } else if (userPassword != confirmed) {
        alert("Your confirmed password does not match");
      } else if (userPassword.length <= 5) {
        alert("Password must contain at least 6 characters");
      } else if (18 > age) {
        alert("You must be 18 years old or older to use the application");
      } else {
        await signUp(supabase, userEmail, confirmed);
        authStore();
        router.push("login");
      }
    },
  },
  data() {
    return {
      userBirthdate: null,
    };
  },
};
</script>

<style></style>
