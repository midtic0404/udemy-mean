const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/post');
const app = express();

mongoose.connect('mongodb+srv://chacha:qIamU68qPaGliZd4@cluster0-m4e7f.mongodb.net/node-angular?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
      console.log('Connected to database!');
    }
  )
  .catch(() => {
    console.log('Connection failed');

  })


app.use(bodyParser.json());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS");
   next();
})

app.post('/api/posts', (req,res,next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(200).json({
    message: 'Post added!'
  })
})

app.use('/api/posts', (req,res,next) => {
  const posts = [
    {id: 'asdf234', title: 'first post', content: 'from the server'},
    {id: 'asasdf5', title: 'second post lala', content: 'new post here yaya'}
  ]

  res.status(200).json({
    message: 'Post fetched successfully',
    posts: posts
  });
});

module.exports = app;
