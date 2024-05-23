const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb+srv://Ucheong:fORtIl08bOaGEl7J@cluster0.swvkl6f.mongodb.net/';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const Post = require('/Models/posts');

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});

app.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/posts', async (req, res) => {
  try { 
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});