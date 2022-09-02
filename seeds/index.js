const seedPosts = require('./comment-seeds');
const seedUsers = require('./posts-seeds');
const seedComments = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
