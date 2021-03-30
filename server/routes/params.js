const Post = require("../models/post");

module.exports = (router) => {
    router.param("post", (req, res, next, id) => {
        var query = Post.findById(id);

        query.exec((err, post) => {
            if (err) {
                return next(err);
            }
            if (!post) {
                return next(new Error("can't find post"));
            }
            req.post = post;
            return next();
        });
    });
};
