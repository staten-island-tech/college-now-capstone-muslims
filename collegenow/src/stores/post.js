import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
  id: "post",
  state: () => {
    return {};
  },
  actions: {
    async createPost(
      petName,
      petAge,
      ownerName,
      phoneNumber,
      description,
      animalType,
      postImage
    ) {
      try {
        const res = await fetch("http://localhost:3000/createPost", {
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
          console.log("Post created: ", post);
          this.loadPost(post);
          console.log(post);
        } else {
          console.error("Error in response: ", post.error);
          throw new Error(post.error);
        }
      } catch (error) {
        console.error("Error creating post: ", error);
      }
    },
    async getPosts() {
      try {
        const res = await fetch("http://localhost:3000/posts");
        this.posts = await res.json();
      } catch (error) {
        console.log(error);
      }
    },

    async deletePosts(username, password) {
      try {
        const res = await fetch("http://localhost:3000/deletePost/:id", {
          method: "DEL",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
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
