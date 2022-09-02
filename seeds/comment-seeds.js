const { Comment } = require('../models');

const commentData = [
  {
    poast_id: 1,
    content: "Comment content here",
    dateCreated: '5/08/2022',
    user_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
