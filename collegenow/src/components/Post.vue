<template>
  <div class="post">
    <h2>{{ Name }}</h2>
    <h2>{{ ownerName }}</h2>
    <p>{{ number }}</p>
    <p>{{ Description }}</p>
    <img src="" alt="" />
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    Name: String,
    Description: String,
    ownerName: String,
    number: String,
    //ask about the different contact info and what we putting
  },
};
</script>

<style>
.post {
  width: 25%;
  height: 550px;
  margin: 10px auto;
}
</style>
