const router = require("express").Router();
const Post = require("../../models/post");
const verify = require("../verifyToken");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");
const { ObjectID } = require("mongodb");
require("../params")(router);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../public"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//renders a single post
router.get("/:post", (req, res) => {
  req.post.populate({ path: "comments" }, (err, post) => {
    res.send(post);
  });
});

// Get Posts
router.get("/", async (req, res) => {
  Post.find({}, null, { sort: "-date" }, (err, posts) => {
    res.send(posts);
  });
});

router.put("/upvote/:post", verify, (req, res) => {
  const token = req.header("Authorization");
  const decoded = jwt.decode(token, { complete: true });
  const userId = new ObjectID(decoded.payload._id);
  Post.updateOne({ _id: req.post }, { $inc: { upvotes: 1 } }, (err) => {
    req.post.voters.push(userId);
    req.post.save();
    res.send("Done");
  });
});

router.put("/downvote/:post", verify, (req, res) => {
  const token = req.header("Authorization");
  const decoded = jwt.decode(token, { complete: true });
  Post.updateOne({ _id: req.post }, { $inc: { upvotes: -1 } }, (err) => {
    req.post.voters.pull(decoded.payload._id);
    req.post.save();
    res.send("Done");
  });
});

// Add Post
router.post("/", verify, upload.single("file"), async (req, res) => {
  const token = req.header("Authorization");
  const decoded = jwt.decode(token, { complete: true });
  const data = JSON.parse(req.body.data);
  const post = new Post({
    author: decoded.payload._id,
    title: data.title,
    description: data.description,
    content: data.content,
    date: Date.now(),
    image: req.file.filename,
  });
  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Post
router.delete("/delete/:id", async (req, res) => {
  Post.deleteOne({ _id: req.params.id }, (err) => {
    res.send("Deleted");
  });
});

router.put("/edit/:post", (req, res) => {
  Post.updateOne({ _id: req.post }, (err) => {
    res.redirect("/" + req.post._id);
  });
});

module.exports = router;
