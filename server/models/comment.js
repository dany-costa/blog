const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  content: {
    type: String
  },
  date: {
    type: Date
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  upvotes:{
    type: Number,
    default: 0
  },
  voters:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model("Comment", CommentSchema);
