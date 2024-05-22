<template></template>

<script>
export default {
  name: "logo",
};
</script>

<style>
.logo {
  max-width: 200px; /* Initial maximum width */
  height: auto;
}

/* Style for medium-sized screens */
@media (max-width: 992px) {
  .logo {
    max-width: 150px; /* Reduced size for medium screens */
  }
}

/* Style for small screens */
@media (max-width: 768px) {
  .logo {
    max-width: 100px; /* Even smaller size for small screens */
  }
}

.logo:hover {
  transform: scale(1.1); /* Slightly enlarges the logo on hover */
  transition: transform 0.3s ease-in-out; /* Smoothens the scaling effect */
}
</style>
