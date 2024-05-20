<template>
  <Avatar
    v-if="$route.path !== '/' && currentUserImageURL"
    :src="currentUserImageURL"
    alt="User Uploaded Profile Picture"
    size="small"
    shape="circle"
    @click="toggleDropdown"
  />
  <Avatar
    v-else
    alt="Default Profile Picture"
    @click="toggleDropdown"
    class="pi pi-user"
    size="small"
    shape="circle"
  />
  <div class="dropdownMenu" v-if="dropdownVisible">
    <RouterLink to="/profile" class="profile"><p>My Profile</p></RouterLink>
    <Divider class="divider" />
    <RouterLink @click="logOut" v-if="isLoggedIn">
      <p class="signOut">
        Log Out
        <i class="pi-sign-out"></i>
      </p>
    </RouterLink>
    <RouterLink to="/login" v-else>
      <p class="signIn">
        Log In
        <i class="pi-sign-in"></i>
      </p>
      ></RouterLink
    >
  </div>
</template>

<script>
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import "primeicons/primeicons.css";
import router from "../router";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
export default {
  name: "accountButton",
  components: {
    Avatar,
    Divider,
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    logOut: function () {
      authStore.clearUser();
      router.push("/");
    },
  },
  data() {
    return {
      dropdownVisible: false,
    };
  },
  mounted() {
    this.currentUserImageURL = authStore.currentUser?.imageURL;
  },
  computed: {
    isLoggedIn() {
      return authStore.isAuthenticated;
    },
    currentUserImageURL() {
      return authStore.currentUser?.imageURL;
    },
  },
};
</script>

<style>
.dropdownMenu {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownMenu p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdownMenu p i {
  margin-left: 10px;
}

.divider {
  border-top: 1px solid #ccc;
  margin-left: 30px;
  margin-right: 30px;
}

.profile {
  text-align: center;
}

.signOut {
  margin-left: 30px;
}
</style>
