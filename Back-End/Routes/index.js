const express = require("express");
const router = new express.Router();
const profileController = require("../Controller/profileController");
const postController = require("../Controller/postController");
const authController = require("../Controller/authController");

router.get("/", profileController.homePage);
router.get("/", postController.homePage);

router.post("/createProfile", profileController.createProfile);
router.get("/profile", profileController.getProfile);
router.patch("/updateProfile/:id", profileController.updateProfile);
router.delete("/deleteProfile/:id", profileController.deleteProfile);

router.post("/createPost", postController.createPost);
router.get("/posts", postController.getPost);
router.patch("/updatePost/:id", postController.updatePost);
router.delete("/deletePost/:id", postController.deletePost);

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/protected", authController.authCheck, authController.protected);

router.post(
  "/uploadTest",
  profileController.upload,
  profileController.homePage
);
router.post("/uploadTest", postController.upload, postController.homePage);
module.exports = router;
