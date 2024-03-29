const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("Authorization");
    if (!token)
        return res
            .status(400)
            .send({ success: false, error: { message: "Access Denied" } });

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send({
            success: false,
            error: { message: "Invalid Token" },
        });
    }
};
