const userPosts = require("../Models/posts");
const multer = require("multer");
const multerOptions = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
  fileFilter: function (req, file, next) {
    //can also set limit in multer
    const isPhoto = file.mimetype.startsWith("image/");
    if (isPhoto) {
      next(null, true); //callback function, first value is error, second value gets passed on if no error
    } else
      ({
        message: "That filetype is not allowed",
      }),
        false;
  },
};
exports.upload = multer(multerOptions).single("photo");

exports.createPost = async (req, res) => {
  try {
    console.log("Request Body: ", req.body);  // Log request body
    console.log("Uploaded File: ", req.file); // Log file upload

    const post = new userPosts(req.body);
    await post.save();
    console.log("Post saved: ", post); // Log the saved post
    res.json(post);
  } catch (error) {
    console.error("Error creating post: ", error); // Log any errors
    res.status(500).json(error);
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await userPosts.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await userPosts.findByIdAndDelete(req.params.id);
    if (!post) {
      res.status(404).send();
    }
    res.send(`${post} was removed`);
  } catch (error) {
    res.status(500).send(error);
  }
};
