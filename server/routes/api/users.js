const router = require('express').Router();
const User = require('../../models/user');

// Get Users
router.get('/', async (req, res) => {
  User.find({}, (err, users) => {
    var userMap = {};

    users.forEach((user) => {
      userMap[user._id] = user;
    });

    res.send(userMap);  
  });
});

// Add User
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete User
router.delete('/:id', async (req, res) => {
  User.deleteOne({ _id: req.params.id }, err => {
    res.redirect('/');
  });
});

module.exports = router;