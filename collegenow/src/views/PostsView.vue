<template>
  <accountButton />
  <div class="logo">
    <RouterLink class="router" to="/"
      ><button><img src="" alt="" /></button
    ></RouterLink>
  </div>
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

export default {
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
    async createPost(Name, ownerName, number, Description) {
      try {
        const res = await fetch("http://localhost:5173/createPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: Name,
            ownerName: ownerName,
            number: number,
            Description: Description,
          }),
        });
        const user = await res.json();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },

    async deletePosts(username, password) {
      try {
        const res = await fetch("http://localhost:5173/deletePosts/:id", {
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
    },
  },
};
</script>
<style></style>
