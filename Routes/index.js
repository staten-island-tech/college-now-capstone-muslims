const express = require("express");
const router = new express.Router();
const profileController = require("../Controllers/profileController");
const postController = require("../Controller/postController");

router.post("/add", profileController.createProfile);
router.get("/profiles", profileController.getProfiles);
router.patch("/profiles/:id", profileController.updateProfile);
router.delete("/profiles/:id", profileController.deleteProfile);

router.post("/add", postController.createPost);
router.get("/posts", postController.getPosts);
router.patch("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);
module.exports = router;