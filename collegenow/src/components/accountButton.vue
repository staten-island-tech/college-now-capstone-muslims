<template>
  <Avatar
    @click="toggleDropdown"
    class="pi pi-user"
    size="small"
    shape="circle"
  />
  <div class="dropdownMenu" v-if="dropdownVisible">
    <RouterLink to="/profile" class="profile"><p>My Profile</p></RouterLink>
    <Divider class="divider" />
    <RouterLink to="/login"
      ><p class="signOut" v-if="notLoggedIn">
        Log In
        <i class="pi-sign-out"></i>
      </p>
      ><p class="signOut" v-if="!notLoggedIn">
        Log Out
        <i class="pi-sign-out"></i>
      </p>
    </RouterLink>
  </div>
</template>

<script>
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import "primeicons/primeicons.css";
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
  },
  data() {
    return {
      dropdownVisible: false,
      notLoggedIn: true,
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
