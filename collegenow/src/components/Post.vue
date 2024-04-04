<template>
  <div class="post">
    <p>{{ Name }}</p>
    <p>{{ ownerName }}</p>
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
    image: String,
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
