<template>
  <accountButton />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button>
        <img
          src="https://i.im.ge/2024/05/24/KdEbs9.image.png"
          alt="Logo with a monkey wearing sunglasses"
        /></button
    ></RouterLink>
  </div>
  <div class="profile">
    <button v-if="!editMode" @click="editProfile">Edit Profile</button>
    <button v-if="editMode" @click="confirmEdits">Confirm Edits</button>
    <div class="pfp" @click="handlePfpClick">
      <label v-if="editMode && !pfpImage" for="profilePictureUpload"
        >Click to upload profile picture</label
      >
      <input
        id="profilePictureUpload"
        type="file"
        accept="image/*"
        @change="handleProfilePictureUpload"
        style="display: none"
      />
      <img v-if="pfpImage" :src="pfpImage" class="pfp-image" />
    </div>
    <div class="email">
      <label for="email">Email: </label>
      <input type="text" id="email" v-model="tempEmail" :disabled="!editMode" />
    </div>
    <div class="username">
      <label for="username">Username: </label>
      <input
        type="text"
        id="username"
        v-model="tempUsername"
        :disabled="!editMode"
      />
    </div>
    <div class="phoneNumber">
      <label for="phoneNumber">Phone Number: </label>
      <input
        type="text"
        id="phoneNumber"
        v-model="tempPhoneNumber"
        :disabled="!editMode"
      />
    </div>
    <div class="decription">
      <label for="description">Description: </label>
      <input
        type="text"
        id="description"
        v-model="tempDescription"
        :disabled="!editMode"
      />
    </div>
    State: <Dropdown @change="stateChanged" :disabled="!editMode" />
  </div>
  <div class="Posts">
    <RouterLink class="router" to="/posts"
      ><button>Posts<img src="" alt="" /></button
    ></RouterLink>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
import "primeicons/primeicons.css";
import Dropdown from "../components/DropDownMenu.vue";
import accountButton from "../components/accountButton.vue";
import { useProfileStore } from "@/stores/profile";
const profileStore = useProfileStore();
export default {
  mounted() {
    this.populate();
  },
  components: {
    Avatar,
    Dropdown,
    accountButton,
  },
  data() {
    return {
      editMode: false,
      tempEmail: "",
      tempUsername: "",
      tempPhoneNumber: "",
      tempDescription: "",
      tempLocation: "",
      pfpImage: null,
    };
  },
  computed: {
    initialTempEmail() {
      return this.$route.query.email;
    },
    initialTempUsername() {
      return this.$route.params.username;
    },
  },
  methods: {
    async populate() {
      let res = await fetch("http://localhost:3000/signup");
      let data = await res.json();
      this.tempLocation = data.state;
      this.tempEmail = data.email;
      this.tempUsername = data.username;
      this.console.log(data);
    },
    handleProfilePictureUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.pfpImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handlePfpClick() {
      if (this.editMode) {
        document.getElementById("profilePictureUpload").click();
      }
    },
    editProfile() {
      // Enter edit mode
      this.tempEmail = this.email;
      this.tempUsername = this.username;
      this.tempPhoneNumber = this.phoneNumber;
      this.tempDescription = this.description;
      this.tempLocation = this.location;
      this.editMode = true;
    },
    confirmEdits() {
      // Save changes
      this.email = this.tempEmail;
      this.username = this.tempUsername;
      this.phoneNumber = this.tempPhoneNumber;
      this.description = this.tempDescription;
      this.location = this.tempLocation;

      // Exit edit mode
      this.editMode = false;
    },
    stateChanged(stateVal) {
      if (typeof stateVal === "string") {
        state.value = stateVal;
      }
    },
  },
};
</script>

<style>
.pfp {
  width: 120px; /* Adjust size as needed */
  height: 120px; /* Adjust size as needed */
  border-radius: 50%; /* Makes the button circular */
  border: 2px solid #ccc; /* Adds a border */
  background-color: #fff; /* Sets background color */
  cursor: pointer; /* Changes cursor to pointer on hover */
  display: flex; /* Allows centering of text */
  align-items: center; /* Centers text vertically */
  justify-content: center; /* Centers text horizontally */
  position: relative; /* Position relative for pseudo-element */
}

.pfp:hover {
  border-color: #007bff; /* Changes border color on hover */
}

.pfp:focus {
  outline: none; /* Removes focus outline */
}

.pfp::before {
  content: ""; /* Empty content for pseudo-element */
  position: absolute; /* Position pseudo-element */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center pseudo-element */
}

.pfp label {
  text-align: center; /* Center text horizontally */
  font-size: 16px; /* Adjust text size as needed */
}

.pfp-image {
  width: 100%; /* Make the image fit inside the circle */
  height: 100%; /* Make the image fit inside the circle */
  border-radius: 50%; /* Maintain circular shape */
}
</style>
