<template>
  <button @click="visible = true">Upload Post</button>
  <Dialog v-model:visible="visible">
    <div class="petName">
      <label for="petName">Pet Name:</label>
      <input v-model="petName" type="text" id="petName" />
    </div>
    <div class="petAge">
      <label for="petAge">Pet Age (Human years):</label>
      <input v-model="petAge" type="text" id="petAge" />
    </div>
    <label for="animalType">Select an animal type:</label>
    <select v-model="selectedAnimal" id="animalType">
      <option disabled value="">Please select an option</option>
      <option v-for="animal in animalType" :key="animal">{{ animal }}</option>
    </select>
    <div class="postImage">
      <input type="file" @change="handleFileUpload" />
    </div>
    <div class="phoneNumber">
      <label for="phoneNumber">Phone Number:</label>
      <input v-model="phoneNumber" type="text" @input="acceptNumber" />
    </div>
    <textarea
      v-model="description"
      placeholder="Write a description..."
      maxlength="500"
    ></textarea>
    <button severity="secondary" @click="visible = false">Cancel</button>
    <button @click="definePost()">Post</button>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import { usePostStore } from "@/stores/post";
const postStore = usePostStore();
export default {
  name: "uploadPost",
  setup() {
    return { postStore };
  },
  components: {
    Dialog,
  },
  data() {
    return {
      petName: "",
      petAge: "",
      phoneNumber: "",
      description: "",
      selectedAnimal: "",
      postImage: null,
      animalType: ["Dog", "Cat", "Monkey"], // Add more animal types as needed
      visible: false,
    };
  },
  methods: {
    acceptNumber() {
      var x = this.phoneNumber
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phoneNumber = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    handleFileUpload(event) {
      console.log("File selected: ", event.target.files[0]);
      this.postImage = event.target.files[0]; // Capture the file
    },
    async definePost() {
      const formData = new FormData();
      formData.append("petName", this.petName);
      formData.append("petAge", this.petAge);
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("description", this.description);
      formData.append("animalType", this.selectedAnimal);
      formData.append("photo", this.postImage);
      try {
        const res = await fetch("http://localhost:3000/createPost", {
          method: "POST",
          body: formData,
        });
        const post = await res.json();
        if (res.ok) {
          console.log("Post created: ", post);
          alert("Post successfully uploaded");
          console.log(post);
        } else {
          console.error("Error in response: ", post.error);
          throw new Error(post.error);
        }
      } catch (error) {
        console.error("Error creating post: ", error);
      }
      this.submitPost();
    },
    submitPost() {
      this.visible = false;
      this.petName = "";
      this.petAge = "";
      this.phoneNumber = "";
      this.description = "";
      this.selectedAnimal = "";
      this.postImage = "";
    },
  },
};
</script>

<style>
.uploadPost-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
}

.uploadPost-container h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}
.uploadPost-container .file-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
}

.uploadPost-container .file-upload input {
  margin: 0;
  color: #666;
}

.uploadPost-container button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.uploadPost-container button:hover {
  background-color: #0056b3;
}
</style>
