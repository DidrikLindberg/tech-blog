// import models
const Post = require('./Post');
const User = require('./user');
const Comment = require('./comment');
// const follows = require('./follows');


Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment,{
    foreignKey: "user_id",
    onDelete:'CASCADE'
})

Comment.belongsTo(User,{
    foreignKey: 'user_id'
})

Post.hasMany(Comment,{
    foreignKey: "post_id",
    onDelete:'CASCADE'
})

Comment.belongsTo(Post,{
    foreignKey: 'post_id'
})
// User.belongsToMany(User, {
//     through: follows,
//     as: 'follower',
//     foreignKey: 'follower_id',
//     onDelete: 'CASCADE',
// });


module.exports = {
    Post,
    User,
    Comment
    // follows,
};