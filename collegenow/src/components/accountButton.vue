<template>
  <Avatar
    size="small"
    shape="circle"
    @click="toggleDropdown"
    class="pi pi-user"
  />
  <!-- <Avatar
    v-else
    alt="Default Profile Picture"
    @click="toggleDropdown"
    class="pi pi-user"
    size="small"
    shape="circle"
        v-if="$route.path !== '/'"
    :src="currentUserImageURL"
    alt="User Uploaded Profile Picture"
  /> -->
  <div class="dropdownMenu" v-if="dropdownVisible">
    <RouterLink to="/profile" class="profile" @click="checkUser"><p>My Profile</p></RouterLink>
    <Divider class="divider" />
    <RouterLink @click="logOut" :to="'/'">
      <p class="signOut">
        Log Out
        <i class="pi pi-sign-out"></i>
      </p>
    </RouterLink>
  </div>
</template>

<script>
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import "primeicons/primeicons.css";
import router from "../router/index";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();

export default {
  name: "accountButton",
  setup() {
    return {
      authStore,
    };
  },
  emits: ["accountClick"],
  components: {
    Avatar,
    Divider,
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
      this.$emit("accountClick");
    },
    logOut() {
      authStore.clearUser();
      console.log("I got clicked");
    },
  },
  data() {
    return {
      dropdownVisible: false,
    };
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
