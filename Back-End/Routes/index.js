const express = require("express");
const router = new express.Router();
const profileController = require("../Controller/profileController");
const postController = require("../Controller/postController");
const authController = require("../Controller/authController");

router.post("/createProfile", profileController.createProfile);
router.patch("/updateProfile/:id", profileController.updateProfile);

router.post("/createPost", postController.authCheck, postController.createPost);
router.get("/posts", postController.getPost);
router.delete("/deletePost/:id", postController.deletePost);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
