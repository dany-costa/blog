const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Joi = require("@hapi/joi");

const schema = {
    username: Joi.string().min(4).required(),
    email: Joi.string().min(4).required().email(),
    password: Joi.string().min(6).required(),
};

// Add User
router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email }, (user) => {
        if (user)
            return res
                .status(500)
                .send({
                    success: false,
                    error: { message: "Email already exists" },
                });
    });

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    newUser
        .save()
        .then((savedUser) => res.json({ savedUser, success: true }))
        .catch((err) =>
            res.status(500).send({ success: false, error: { message: err } })
        );
});

// Login User
router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.status(400).send({
                success: false,
                error: { message: "Email or password invalid" },
            });

        bcrypt.compare(req.body.password, user.password, (err, success) => {
            if (err) {
                return res
                    .status(400)
                    .send({ success: false, error: { message: err } });
            }
            if (success) {
                const token = jwt.sign(
                    {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                    },
                    process.env.TOKEN_SECRET
                );
                return res.header("auth-token", token).json({
                    token,
                    success: true,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                    },
                });
            } else {
                // response is OutgoingMessage object that server response http request
                return res.status(400).send({
                    success: false,
                    error: { message: "Email or password invalid" },
                });
            }
        });
    });
});

// Delete User
router.delete("/:id", async (req, res) => {
    User.deleteOne({ _id: req.params.id }, (err) => {
        res.redirect("/");
    });
});

module.exports = router;
