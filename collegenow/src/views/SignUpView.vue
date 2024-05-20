<template>
  <div class="signUp">
    <h1 class="title">Sign Up</h1>
    <form
      name="signupForm"
      @submit.prevent="authStore.register(...signup(calculateAge(birthdate)))"
    >
      <h2 class="text">Username</h2>
      <div class="username">
        <input type="text" id="username" v-model="username" />
      </div>
      <h2 class="text">Email</h2>
      <div class="email">
        <input type="email" id="email" v-model="userEmail" />
      </div>
      <h2 class="text">Please enter your birthday</h2>
      <div class="age"><input type="date" v-model="birthdate" /></div>
      <h2 class="text">Please select your state</h2>
      <div class="state">
        <Dropdown @change="stateChanged" />
      </div>
      <h2 class="text">Password</h2>
      <div class="password">
        <input type="password" id="password" v-model="userPassword" />
      </div>
      <h2 class="text">Re-enter your password</h2>
      <div class="password">
        <input type="password" id="confirm" v-model="confpassword" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <div class="toLogin">
      Already have an account?
      <RouterLink to="/login">Login here</RouterLink>
    </div>
  </div>
  <img
    class="backgroundImage"
    src="https://img.freepik.com/premium-photo/group-monkeys-standing-each-other-street-with-man-background-generative-ai_97167-5808.jpg"
    alt="Background image featuring a bunch of monkeys"
  />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import router from "../router/index";
import Dropdown from "../components/DropDownMenu.vue";
const authStore = useAuthStore();
const username = ref("");
const userEmail = ref("");
const userPassword = ref("");
const birthdate = ref("");
const confpassword = ref("");
const state = ref("");

function calculateAge() {
  const today = new Date();
  const birthDate = new Date(birthdate.value);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function stateChanged(stateVal) {
  if (typeof stateVal === "string") {
    state.value = stateVal;
  }
}

function signup(age) {
  if (
    userEmail.value === "" ||
    userPassword.value === "" ||
    confpassword.value === "" ||
    state.value === "" ||
    username.value === "" ||
    age === ""
  ) {
    alert("Please fill out all fields");
  } else if (!userEmail.value.includes("@")) {
    alert("Email needs to include '@'");
  } else if (18 > age) {
    alert("You must be 18 years old or older to use the application");
  } else if (userPassword.value != confpassword.value) {
    alert("Your confirmed password does not match");
  } else if (userPassword.value.length <= 5) {
    alert("Password must contain at least 6 characters");
  } else {
    router.push("profile");
    return [
      age,
      userPassword.value,
      confpassword.value,
      userEmail.value,
      username.value,
      state.value,
    ];
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
}
</style>
