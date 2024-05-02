<template>
  <Avatar
    @click="toggleDropdown"
    icon="pi pi-user"
    size="small"
    shape="circle"
  />
  <div class="dropdownMenu" v-if="dropdownVisible">
    <RouterLink to="/profile"><p>My Profile</p></RouterLink>
    <Divider type="solid" layout="horizontal" />
    <RouterLink to="/login"
      ><p>
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
</style>
