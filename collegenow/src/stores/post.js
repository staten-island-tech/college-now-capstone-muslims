import { defineStore } from "pinia";
export const postStore = defineStore("post", {
  id: "post",
  state: () => {
    return {};
  },
  actions: {
    async createPost(
      Name,
      ownerName,
      number,
      Description,
      animalType,
      phoneNumber,
      postImage
    ) {
      try {
        const res = await fetch("http://localhost:3000/createPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: Name,
            ownerName: ownerName,
            number: number,
            Description: Description,
            animalType: animalType,
            phoneNumber: phoneNumber,
            postImage: postImage,
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
