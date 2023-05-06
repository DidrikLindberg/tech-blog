// import models
const Posts = require('./posts');
const users = require('./users');
const follows = require('./follows');


Posts.belongsTo(users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

users.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

users.belongsToMany(users, {
    through: follows,
    as: 'follower',
    foreignKey: 'follower_id',
    onDelete: 'CASCADE',
});


module.exports = {
    Posts,
    users,
    follows,
};