const router = require('express').Router();
const Post = require('../../models/post');
const verify = require('../verifyToken');
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require('path');
require('../params')(router);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, 'public'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

//renders a single post
router.get("/:post", (req, res) => {
  req.post.populate(
    { path: "comments" },
    (err, post) => {
      res.send(post);
    }
  );
});

// Get Posts
router.get('/', async (req, res) => {
  Post.find({}, (err, posts) => {
    res.send(posts);
  });
});

// Add Post
router.post('/', verify, upload.single("file"),async (req, res) => {
  const token = req.header('Authorization');
  const decoded = jwt.decode(token, {complete: true});
  const data = JSON.parse(req.body.data);
  const post = new Post({
    author: decoded.payload._id,
    title: data.title,
    description: data.description,
    content: data.content,
    date: Date.now(),
    image: req.file.filename
  });
  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Post
router.delete('/:id', async (req, res) => {
  Post.deleteOne({ _id: req.params.id }, err => {
    res.redirect('/');
  });
});

module.exports = router;