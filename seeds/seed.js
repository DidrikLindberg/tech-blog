const sequelize = require('../config/connection');
// const { User, Post } = require('../models');

const seedUsers = require('./userData');
const seedPosts = require('./postData');



const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

    process.exit(0);
//     try {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//     });
//   const posts = await Post.bulkCreate(postData);

//   console.log(`Inserted ${users.length} users and ${posts.length} posts.`);


//   process.exit(0);
// } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
};

seedAll();
