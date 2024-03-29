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
        if (err)
            return res
                .status(500)
                .send({ success: false, error: { message: err } });
        res.json({ post, success: true });
    });
});

// Get Posts
router.get("/", async (req, res) => {
    Post.find({}, null, { sort: "-date" }, (err, posts) => {
        if (err)
            return res
                .status(500)
                .send({ success: false, error: { message: err } });
        res.json({ posts, success: true });
    });
});

router.put("/upvote/:post", verify, (req, res) => {
    const token = req.header("Authorization");
    const decoded = jwt.decode(token, { complete: true });
    req.post.voters.push(decoded.payload._id);
    req.post.save();
    res.json({ success: true });
});

router.put("/downvote/:post", verify, (req, res) => {
    const token = req.header("Authorization");
    const decoded = jwt.decode(token, { complete: true });
    req.post.voters.pull(decoded.payload._id);
    req.post.save();
    res.json({ success: true });
});

// Add Post
router.post("/", verify, upload.single("file"), (req, res) => {
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
    post.save(post)
        .then((savedPost) => {
            res.json({ savedPost, success: true });
        })
        .catch((err) => {
            res.status(500).send({ success: false, error: { message: err } });
        });
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
