const router = require('express').Router();
const Post = require('../../models/post');
require('../params')(router);

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
    var postMap = {};

    posts.forEach((post) => {
      postMap[post._id] = post;
    });

    res.send(postMap);
  });
});

// Add Post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    date: Date.now(),
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