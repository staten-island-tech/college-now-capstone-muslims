<template>
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button>
        <img
          src="https://cdn.discordapp.com/attachments/1025570390656962642/1242347460450586716/PINDER.jpg?ex=664d81bc&is=664c303c&hm=d8e1c1546588c4ab3baa530a0a8f32753d2ca174b102fc6b18a7f7be34418658&"
          alt="Logo with a monkey wearing sunglasses"
        /></button
    ></RouterLink>
  </div>
  <accountButton />
  <div class="Posts">
    <Post
      v-for="post in uploadedPhotos"
      :image="post.imageUrl"
      :key="post.id"
      :Name="post.name"
      :description="post.description"
      :ownerName="post.ownerName"
      :number="post.number"
      :email="post.email"
    />
  </div>
  <uploadPost />
  <!-- still need filters,swiping to next pet, button to next photo -->
</template>

<script>
import Post from "../components/Post.vue";
import uploadPost from "../components/uploadPost.vue";
import accountButton from "../components/accountButton.vue";
import { usePostStore } from "../stores/post";
const postStore = usePostStore();
export default {
  setup() {
    return {
      postStore,
    };
  },
  components: {
    Post,
    uploadPost,
    accountButton,
  },
  data() {
    return {
      uploadedPhotos: [
        // Add more photos as they are uploaded from back end
      ],
      visible: false,
    };
  },

  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
    addPost(postData) {
      // Add the new post to the posts array
      this.posts.push(postData);
    },
  },
};
</script>
<style></style>
