<template>
  <button @click="visible = true">Upload Post</button>
  <Dialog v-model:visible="visible">
    <div class="petName">
      <label for="petName">Pet Name:</label>
      <input type="text" id="petName" />
    </div>
    <div class="petAge">
      <label for="petAge">Pet Age:</label>
      <input type="text" id="petAge" />
    </div>
    <label for="animalType">Select an animal type:</label>
    <select v-model="selectedAnimal" id="animalType">
      <option disabled value="">Please select an option</option>
      <option v-for="animal in animalTypes" :key="animal">{{ animal }}</option>
    </select>
    <FileUpload
      name="fileUpload[]"
      url=""
      @upload=""
      :multiple="true"
      accept="image/*"
    >
    </FileUpload>
    <div class="phoneNumber">
      <label for="phoneNumber">Phone Number:</label>
      <input v-model="phoneNumber" type="text" @input="acceptNumber">
    </div>
    <textarea
      v-model="description"
      placeholder="Write a description..."
    ></textarea>
    <button severity="secondary" @click="visible = false">Cancel</button>
    <button @click="submitPost, (visible = false)">Post</button>
  </Dialog>
  <br />
</template>

<script>
//add more parts like email and contact info into the template
import Dialog from "primevue/dialog";
import Post from "./Post.vue";
import FileUpload from "primevue/fileupload";
//ask to put email, number in the container where you upload a post
export default {
  name: "uploadPost",
  components: {
    Post,
    Dialog,
    FileUpload,
  },
  data() {
    return {
      phoneNumber: "",
      postName: "",
      postOwnerName: "",
      postNumber: "",
      postDescription: "",
      showPost: false,
      files: [],
      description: "",
      selectedAnimal: "",
      animalType: ["Dog", "Cat", "Monkey"], // Add more animal types as needed
      visible: false,
    };
  },
  methods: {
    acceptNumber() {
        var x = this.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.phoneNumber = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    },
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
