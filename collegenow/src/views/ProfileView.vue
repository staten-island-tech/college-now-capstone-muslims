<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
async function createProfile() {
  try {
    const res = await fetch("http://localhost:3000/createProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

      }),
    });
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

async function updateProfiles() {
  try {
    const res = await fetch("http://localhost:3000/updateProfiles/:id", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

      }),
    });
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

async function deleteProfiles() {
  try {
    const res = await fetch("http://localhost:3000/deleteProfiles/:id", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

      }),
    });
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

async function login(username, password) {
  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "DEL",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        password: password,
      }),
    });
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>

</style>