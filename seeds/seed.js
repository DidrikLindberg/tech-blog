const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

console.log(postData);

const seedDatabase = async () => {
    try {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });
  const comments = await Comment.bulkCreate(commentData);

  const posts = await Post.bulkCreate(postData);



  console.log(`Inserted ${users.length} users, and ${posts.length} posts, and ${comments.length}.`);


  process.exit(0);
} catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
