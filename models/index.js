const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Post);
Post.hasMany(Comment);
User.hasMany(Comment);
Post.belongsTo(User);
Comment.belongsTo(Post);
Comment.belongsTo(User);

module.exports = {
  Post,
  Comment,
  User,
};
