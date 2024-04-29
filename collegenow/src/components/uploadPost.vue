<template>
  <div>
    <Dialog>
      <FileUpload
        name="fileUpload[]"
        url=""
        @upload=""
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000"
      >
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
          <p>number, email, location, pet description, owner name</p>
        </template>
      </FileUpload>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";
export default {
  name: "uploadPost",
  components: {
    Dialog,
    FileUpload,
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

.uploadPost-container .file-upload p {
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
