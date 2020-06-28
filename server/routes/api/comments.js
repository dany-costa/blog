const router = require("express").Router();
const Comment = require("../../models/comment");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");
require("../params")(router);

// Get Comments
router.get("/", async (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) return res.status(500).send(err);
    var commentMap = {};
    comments.forEach((comment) => {
      commentMap[comment._id] = comments;
    });

    res.json(commentMap);
  });
});

// Add Comment
router.post("/new/:post", verify, async (req, res) => {
  const token = req.header("Authorization");
  const decoded = jwt.decode(token, { complete: true });
  const comment = new Comment({
    author: decoded.payload._id,
    content: req.body.content,
    post: req.post,
    date: Date.now(),
  });
  await comment.save((err, newComment) => {
    if (err) return res.status(500).send(err);
    req.post.comments.push(newComment._id);
    req.post.save();
    res.send(newComment);
  });
});

// Delete Comment
router.delete("/delete/:post/:comment", (req, res) => {
  const id = req.params.comment;
  Comment.deleteOne({ _id: id }, (err) => {
    if (err) return res.status(500).send(err);
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
    if (err) return res.status(500).send(err);
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
    if (err) return res.status(500).send(err);
    comment.upvotes -= 1;
    comment.voters.pull(decoded.payload._id);
    comment.save();
    res.send("Done");
  });
});

module.exports = router;
