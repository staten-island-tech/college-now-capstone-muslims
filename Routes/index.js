const express = require("express");
const router = new express.Router();
const profileController = require("../Controller/profileController");
const postController = require("../Controller/postController");
const authController = require("../Controller/authController");

router.get("/", profileController.homePage);
router.get("/", postController.homePage);

router.post("/add", profileController.createProfile);
router.get("/profiles", profileController.getProfile);
router.patch("/profiles/:id", profileController.updateProfile);
router.delete("/profiles/:id", profileController.deleteProfile);

router.post("/add", postController.createPost);
router.get("/posts", postController.getPost);
router.patch("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/protected", authController.authCheck, authController.protected);

router.post("/uploadTest", profileController.upload, profileController.homePage);
router.post("/uploadTest", postController.upload, postController.homePage);
module.exports = router;
