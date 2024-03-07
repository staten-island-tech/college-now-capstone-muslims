const userPosts = require("../Models/posts")

exports.createPost = async (req, res) => {
    try {
      const post = new userPosts(req.body);
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