// import models
const Post = require('./Post');
const User = require('./User');
const follows = require('./follows');


Post.belongsTo(users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.belongsToMany(User, {
    through: follows,
    as: 'follower',
    foreignKey: 'follower_id',
    onDelete: 'CASCADE',
});


module.exports = {
    Post,
    User,
    follows,
};