<template>
  <div class="accountDropdown" @click="toggleDropdown">
    <Avatar icon="pi pi-user" size="small" shape="circle" />
    <div class="dropdownMenu" v-if="dropdownVisible">
      <p to="/profile">My Profile</p>
      <p to="/editProfile">Edit Profile</p>
      <Divider />
      <p to="/login">
        Log Out
        <i class="fas fa-sign-out-alt"></i>
      </p>
    </div>
  </div>
</template>

<script>
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
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
    };
  },
};
</script>

<style>
.accountDropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dropdownMenu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 12px 16px;
  margin-top: 8px;
}

.dropdownMenu p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdownMenu p:hover {
  background-color: #f1f1f1;
}

.accountDropdown:hover .dropdownMenu {
  display: block;
}

.accountDropdown:hover .Avatar {
  background-color: #ddd;
}
</style>
