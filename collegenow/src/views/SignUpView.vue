<template>
  <div class="signUp">
    <h1 class="title">Sign Up</h1>
    <form
      class="signUpForm"
      @submit.prevent="register(age, userPassword, userEmail)"
    >
      <h2 class="text">Please choose a username (Preferably your name)</h2>
      <div class="username">
        <input type="text" id="confirm" />
      </div>
      <h2 class="text">Email</h2>
      <div class="email">
        <input type="email" id="email" />
      </div>
      <h2 class="text">Please enter your birthday</h2>
      <div class="age"><input type="date" v-model="userBirthdate" /></div>
      <h2 class="text">Please select your state</h2>
      <div class="state">
        <Dropdown />
      </div>
      <h2 class="text">Password</h2>
      <div class="password">
        <input type="password" id="password" />
      </div>
      <h2 class="text">Re-enter your password</h2>
      <div class="password">
        <input type="password" id="confirm" />
      </div>
      <input
        type="submit"
        value="Sign Up"
        id="submit"
        @click="signup"
        to="/profile"
      />
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
import router from "../router/index";
import Dropdown from "../components/DropDownMenu.vue";
import uploadPost from "../components/uploadPost.vue";
export default {
  components: {
    Dropdown,
  },
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
    async signup(age) {
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
        router.push("login");
        return age, userPassword, userEmail;
      }
    },
    async register(age, userPassword, userEmail) {
      try {
        const res = await fetch("http://localhost:5173/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            age: age,
          }),
        });
        const user = await res.json();
        console.log(user);
      } catch (error) {
        console.log(error);
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
