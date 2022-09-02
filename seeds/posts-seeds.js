const { Post } = require('../models');

const postData = [
  {
    title: 'Post Title',
    content: "Post content here",
    dateCreated: '5/08/2022',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
