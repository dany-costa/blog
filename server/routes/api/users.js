const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
router.post('/register', async (req, res) => {

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  try {
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login User
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email or password invalid');

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({_id: user._id, username:user.username, email: user.email}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send({token, user:{username:user.username, email: user.email}});

})

// Delete User
router.delete('/:id', async (req, res) => {
  User.deleteOne({ _id: req.params.id }, err => {
    res.redirect('/');
  });
});

module.exports = router;