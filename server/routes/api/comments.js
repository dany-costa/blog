const router = require('express').Router();
const Comment = require('../../models/comment');
require('../params')(router);

// Get Comments
router.get('/', async (req, res) => {
  Comment.find({}, (err, comments) => {
    var commentMap = {};

    comments.forEach((comment) => {
      commentMap[comment._id] = comments;
    });

    res.send(commentMap);
  });
});

// Add Comment
router.post('/new/:post', async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    post: req.post,
    date: Date.now(),
  });
  try {
    const savedComment = await comment.save((err, newComment) => {
      req.post.comments.push(newComment);
      req.post.save();
    });
    res.send(savedComment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Comment
router.delete('/:id', async (req, res) => {
  Comment.deleteOne({ _id: req.params.id }, err => {
    res.redirect('/');
  });
});

module.exports = router;