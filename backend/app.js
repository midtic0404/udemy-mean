const express = require('express');
const app = express();

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
