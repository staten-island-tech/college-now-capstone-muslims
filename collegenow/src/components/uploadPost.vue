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
};
</script>

<style></style>
