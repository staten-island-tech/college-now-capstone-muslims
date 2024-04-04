<template>
  <div class="Posts">
    <Post 
      Animal="Dog"
      Description="OwnerUcheong"
      Image=""
    />
  </div>
</template>

<script>
import Post from "../components/Post.vue"
  export default {
    name: "Posts",
    components: {
      Post,
    },
    data() {
      return {
        
      };
    },
  }
</script>

<style>

</style>