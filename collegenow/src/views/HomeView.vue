<template>
  <div class="header">
    <div class="nav-links">
      <RouterLink class="logo-router" to="/"
        ><button>
          <img
            class="logo"
            src="https://i.im.ge/2024/05/24/KdEbs9.image.png"
            alt="Logo with a monkey wearing sunglasses"
          /></button
      ></RouterLink>
      <RouterLink
        class="login-router"
        to="/login"
        v-if="authStore.currentUser === null"
      >
        <button class="login">Login</button>
      </RouterLink>
      <RouterLink
        class="signup-router"
        to="/signup"
        v-if="authStore.currentUser === null"
      >
        <button class="signUp">Sign Up</button>
      </RouterLink>
      <div class="actions">
        <RouterLink class="posts-router" to="/posts" @click="checkUser">
          <button class="posts">Posts</button>
        </RouterLink>
        <accountButton @accountClick="checkUser" />
      </div>
    </div>
  </div>
  <img
    class="backgroundImage"
    src="https://img.freepik.com/premium-photo/group-monkeys-standing-each-other-street-with-man-background-generative-ai_97167-5808.jpg"
    alt="Background image featuring a bunch of monkeys"
  />
  <div class="scrollDownContainer">
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
    <span class="text">Scroll down</span>
  </div>
  <div class="picturesOF">You can post pictures of...</div>
  <p class="firstText">Dogs</p>
  <img
    class="dog"
    src="https://t4.ftcdn.net/jpg/06/26/60/13/360_F_626601323_Jq9Fb64oP7omaHB7VOiv94uvcVXCOzET.jpg"
    alt="Picture featuring a dog"
  />
  <p class="secondText">Cats</p>
  <img
    class="cat"
    src="https://www.thesprucepets.com/thmb/BKx3NbrkOC9DqZryR7QLTYFdgA4=/5400x0/filters:no_upscale():strip_icc()/one-year-old-happy-cat-laying-in-the-park-vietnam-550706985-57fbba7a3df78c690f7a7c39.jpg"
    alt="Picture featuring a cat"
  />
  <p class="thirdText">and MONKEYS</p>
  <img
    class="monkey"
    src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
    alt="Picture featuring a monkey"
  />
</template>

<script>
import accountButton from "../components/accountButton.vue";
import { useAuthStore } from "../stores/auth";
import router from "../router/index";
const authStore = useAuthStore();
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    return {
      authStore,
    };
  },
  mounted() {
    this.animation();
  },
  components: {
    accountButton,
  },
  methods: {
    checkUser() {
      if (!authStore.isAuthenticated) {
        router.push("login");
      }
    },
    animation() {
      gsap.to(".firstText", {
        duration: 3,
        scrollTrigger: ".dog",
        x: -800,
        ease: "power1.inOut",
      });
      gsap.to(".dog", {
        duration: 3,
        scrollTrigger: ".dog",
        x: 500,
        ease: "power1.inOut",
      });
      gsap.to(".secondText", {
        duration: 3,
        scrollTrigger: ".cat",

        x: -570,
        ease: "power1.inOut",
      });
      gsap.to(".cat", {
        duration: 3,
        scrollTrigger: ".cat",

        x: 500,
        ease: "power1.inOut",
      });
      gsap.to(".thirdText", {
        duration: 3,
        scrollTrigger: ".monkey",
        x: -550,
        ease: "power1.inOut",
      });
      gsap.to(".monkey", {
        duration: 3,
        scrollTrigger: ".monkey",
        x: 500,
        ease: "power1.inOut",
      });
    },
  },
};
</script>

<style scoped>
.dog,
.cat,
.monkey {
  position: relative;
  width: 40rem;
  height: 20rem;
  object-fit: cover;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.picturesOF {
  margin-left: 42rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-family: "Arial", sans-serif; /* A clean, sans-serif font */
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: bold; /* Make the text bold */
  color: #333; /* Dark grey text color */
  padding: 10px;
  gap: 10rem;
}

.firstText {
  position: absolute;
  font-size: 5rem;
  margin-left: 12rem;
  color: black;
  z-index: 1;
  text-align: right;
  right: 0;
}

.secondText {
  position: absolute;
  font-size: 5rem;
  margin-left: 12rem;
  margin-bottom: 1rem;
  color: black;
  z-index: 1;
  text-align: right;
  right: 0;
}
.thirdText {
  position: absolute;
  font-size: 5rem;
  margin-left: 7rem;
  color: black;
  z-index: 1;
  text-align: right;
  right: 0;
}

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
  z-index: -1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.logo-router {
  flex-grow: 1;
  text-align: left;
}

.logo {
  height: 30px; /* Smaller logo size */
  margin-right: 10px;
}

.nav-links {
  display: flex;
  gap: 10px;
  align-items: center;
}

.actions {
  display: flex;
  gap: 10px;
}

.login,
.signUp {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
}

.posts {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
}

.content-start {
  margin-top: 60px;
}
.scrollDownContainer {
  position: relative;
  width: 24px;
  height: 24px;
  margin-top: 48%;
  margin-left: 50%;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: black;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}
</style>
