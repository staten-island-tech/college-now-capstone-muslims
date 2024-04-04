<template>
  <div class="Posts">
    <Post
      v-for="post in uploadedPhotos"
      :image="post.imageUrl"
      :key="post.id"
      :Name="post.name"
      :description="post.description"
      :ownerName="post.ownerName"
      :number="post.number"
    />
  </div>
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
  <!-- still need filters, the my profile, swiping to next pet, button to next photo -->
</template>

<script>
import Post from "../components/Post.vue";
export default {
  data() {
    return {
      uploadedPhotos: [
        // Add more photos as they are uploaded from back end
      ],
    };
  },
};
</script>
<style></style>
