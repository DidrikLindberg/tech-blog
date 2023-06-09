// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const { text } = require('express');

// Initialize Post model (table) by extending off Sequelize's Model class
class Post extends Model {}


//set up fields and fules for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
                },
            }

        // comment_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Comment',
        //         key: 'id',
        //     },
        // }

    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post',
    }
);

module.exports = Post;

