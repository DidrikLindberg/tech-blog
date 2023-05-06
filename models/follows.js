// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Follows model (table) by extending off Sequelize's Model class
class Follows extends Model {}


//set up fields and fules for follows model
Follows.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },

        following_user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
                },
            },

        followed_user_id: {
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
        modelName: 'follows',
    }
);
