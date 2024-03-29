const userPosts = require("../Models/posts")
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

exports.homePage = (req, res) => {
  const stores = ["Dunkin", "Tim Hortons", "Starbucks"];
  try {
    console.log(req.name); //we get req.name from the middleware but WE MUST call it in index
    res.json([stores, req.name]); //if we want to send multiple "things" back to the user we need to use an array or object. Can't simply use , as that denotes status codes
  } catch (error) {
    console.log(error);
  }
};

exports.createPost = async (req, res) => {
    try {
      const post = new userPosts(req.body);
      shop.photo = req.file.path;
      await post.save();
      res.json([post]);
    } catch (error) {
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
  
  exports.updatePost = async (req, res) => {
    try {
      //find the store then update the store
      const post = await userPosts.findById(req.params.id);
      const updates = Object.keys(req.body);
      updates.forEach((update) => (post[update] = req.body[update]));
      await post.save();
      res.json(post);
    } catch (error) {
      console.log(error);
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