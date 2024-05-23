import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
  state: () => ({
    currentPost: null,
    posts: [],
  }),
  actions: {
    loadPost(post) {
      this.currentPost = post;
    },
    deletePost() {
      this.currentPost = null;
    },
    async createPost(petName, petAge, ownerName, phoneNumber, description, animalType, postImage) {
      try {
        const res = await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            petName,
            petAge,
            ownerName,
            phoneNumber,
            description,
            animalType,
            postImage,
          }),
        });
        const post = await res.json();
        if (res.ok) {
          this.loadPost(post);
          console.log(post);
        } else {
          throw new Error(post.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPosts() {
      try {
        const res = await fetch("http://localhost:3000/posts");
        this.posts = await res.json();
      } catch (error) {
        console.log(error);
      }
    },

    async deletePosts(username, password) {
      try {
        const res = await fetch("http://localhost:3000/deletePosts/:id", {
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
});
