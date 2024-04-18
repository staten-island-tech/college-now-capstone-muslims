<template>
  <div
    class="accountDropdown"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <Avatar icon="pi pi-user" image="uploadedImg" size="small" shape="circle" />
    <div class="dropdownMenu" v-if="hover">
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
  methods: {},
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style></style>
