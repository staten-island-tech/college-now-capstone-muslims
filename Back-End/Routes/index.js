const express = require("express");
const router = new express.Router();
const profileController = require("../Controller/profileController");
const postController = require("../Controller/postController");
const authController = require("../Controller/authController");

router.post("/profile", profileController.createProfile);
router.patch("/profile/:id", profileController.updateProfile);

router.post("/posts", postController.createPost);
router.get("/posts", postController.getPost);
router.delete("/posts/:id", postController.deletePost);

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/protected", authController.authCheck, authController.protected);

router.post(
  "/uploadTest",
  profileController.upload,
  profileController.homePage
);
router.post("/uploadTest", postController.upload, postController.homePage);
module.exports = router;
