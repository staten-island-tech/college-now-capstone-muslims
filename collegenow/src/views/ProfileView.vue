<template>
  <div class="pfp">
    <Avatar icon="pi pi-user" image="uploadedImg" size="small" shape="circle" />
  </div>
  <div class="description">
    <p>{{ userEmail }}</p>
    <p>{{ username }}</p>
    <p>{{ phonenumber }}</p>
    <p>{{ description about yourself }}</p>
    <p>{{ location }}</p>
  </div>
  <button to="/editProfile" class="editProfile">Edit Profile</button>
</template>

<script>
import Avatar from "primevue/avatar";
export default {
  //change it from all profiles to avatars posts etc
};
</script>

<style></style>
