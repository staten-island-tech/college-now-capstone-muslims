<template>
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button>
        <img
          src="https://i.im.ge/2024/05/24/KdEbs9.image.png"
          alt="Logo with a monkey wearing sunglasses"
        /></button
    ></RouterLink>
  </div>
  <accountButton />
  <uploadPost />
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post._id">{{ post.petName }}</li>
    </ul>
  </div>
  <!-- still need filters,swiping to next pet, button to next photo -->
</template>

<script >
import { ref, onMounted } from 'vue';
import Post from "../components/Post.vue";
import uploadPost from "../components/uploadPost.vue";
import accountButton from "../components/accountButton.vue";
import { useAuthStore } from "@/stores/auth";

export default {
  components: {
    Post,
    uploadPost,
    accountButton,
  },
  setup() {
    const uploadedPhotos = ref([]);
    const posts = ref([]);
    const authStore = useAuthStore();

    async function getPosts() {
      const authStore = useAuthStore();
      let postUsername = authStore.username
      try {
        const response = await fetch('http://localhost:3000/posts/${calorieData}', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        posts.value = data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    onMounted(() => {
      getPosts();
    });

    return {
      uploadedPhotos,
      posts,
      getPosts,
      authStore,
    };
  },
};
</script>
<style></style>
