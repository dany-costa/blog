const router = require("express").Router();
const Comment = require("../../models/comment");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");
require("../params")(router);

// Get Comments
router.get("/", async (req, res) => {
  Comment.find({}, (err, comments) => {
    var commentMap = {};

    comments.forEach((comment) => {
      commentMap[comment._id] = comments;
    });

    res.send(commentMap);
  });
});

// Add Comment
router.post("/new/:post", async (req, res) => {
  const token = req.header("Authorization");
  const decoded = jwt.decode(token, { complete: true });
  const comment = new Comment({
    author: decoded.payload._id,
    content: req.body.content,
    post: req.post,
    date: Date.now(),
  });
  try {
    const savedComment = await comment.save();
    req.post.comments.push(savedComment);
    req.post.save();
    res.send(savedComment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Comment
router.delete("/delete/:post/:comment", (req, res) => {
  const id = req.params.comment;
  Comment.deleteOne({ _id: id }, (err) => {
    req.post.comments.pull(id);
    req.post.save();
    res.send("Deleted");
  });
});

router.put("/upvote/:post/:comment", verify, (req, res) => {
  const id = req.params.comment;
  const token = req.header("Authorization");
  const decoded = jwt.decode(token, { complete: true });
  Comment.findOne({ _id: id }, (err, comment) => {
    comment.upvotes += 1;
    comment.voters.push(decoded.payload._id);
    comment.save();
    res.send("Done");
  });
});

router.put("/downvote/:post/:comment", verify, (req, res) => {
  const id = req.params.comment;
  const token = req.header("Authorization");
  const decoded = jwt.decode(token, { complete: true });
  Comment.findOne({ _id: id }, (err, comment) => {
    comment.upvotes -= 1;
    comment.voters.pull(decoded.payload._id);
    comment.save();
  });
});

module.exports = router;
