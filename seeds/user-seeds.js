const { User } = require('../models');

const userData = [
  {
    username: 'username',
    password: "password"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
