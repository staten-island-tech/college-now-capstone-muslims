<template>
  <div class="uploadPost-container">
    <div class="petName">
      <label for="petName">Pet Name:</label>
      <input type="text" id="petName"/>
    </div>
    <div class="petAge">
      <label for="petAge">Pet Age:</label>
      <input type="text" id="petAge"/>
    </div>
    <label for="animalType">Select an animal type:</label>
    <select v-model="selectedAnimal" id="animalType">
      <option disabled value="">Please select an option</option>
      <option v-for="animal in animalTypes" :key="animal">{{ animal }}</option>
    </select>
    <div class="file-upload">
      <label for="fileInput">Click here to upload a file</label>
      <input id="fileInput" type="file" @change="handleFileUpload" multiple accept="image/*">
    </div>
    <textarea v-model="description" placeholder="Write a description..."></textarea>
    <button @click="submitPost">Submit</button>
    <Post v-if="showPost" :Name="postName" :ownerName="postOwnerName" :number="postNumber" :Description="postDescription" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "uploadPost",
  components: {
    Post,
  },
  data() {
    return {
      postName: "",
      postOwnerName: "",
      postNumber: "",
      postDescription: "",
      showPost: false,
      files: [],
      description: "",
      selectedAnimal: '',
      animalTypes: ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit'] // Add more animal types as needed
    };
  },
  methods: {
    handleFileUpload(event) {
      // Retrieve the uploaded files
      this.files = event.target.files;
    },
    submitPost() {
      // Emit an event with the uploaded files and description
      this.$emit("submitPost", {
        name: "Name", // Adjust as needed
        ownerName: "Owner Name", // Adjust as needed
        number: "Number", // Adjust as needed
        description: this.description,
        images: this.files,
      });
      // Clear input fields after submission if needed
      this.files = [];
      this.description = "";
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
