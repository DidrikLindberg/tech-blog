// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Posts model (table) by extending off Sequelize's Model class
class Posts extends Model {}


//set up fields and fules for posts model
Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        
        title: {
            type: varchar(50),
            allowNull: false,
            },
        
        body: {
            type: varchar(500),
            allowNull: false,
            },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
                },
            },

    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    }
);

