<<<<<<< HEAD
<template>
  <div class="Posts">
    <Post
      Animal="Dog"
      Decription="Owner:Ucheong, Age: 46, Description: Blah Blah"
    />
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "Posts",
  components: {
    Post,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
=======
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
>>>>>>> parent of d3f0c7f (.)
