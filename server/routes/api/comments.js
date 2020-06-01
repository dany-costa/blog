const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadCommentsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadCommentsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadCommentsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadCommentsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://dany-costa:E3AzE6ezU@cluster0-o1ac3.mongodb.net/test?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true
    }
  );

  return client.db('blog').collection('comments');
}

module.exports = router;