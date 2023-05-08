const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

console.log(postData);

const seedDatabase = async () => {
    try {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });
  const posts = await Post.bulkCreate(postData);

  console.log(`Inserted ${users.length} users and ${posts.length} posts.`);


  process.exit(0);
} catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
