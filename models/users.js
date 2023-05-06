// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize users model (table) by extending off Sequelize's Model class
class Users extends Model {}


//set up fields and fules for users model
Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },

        username: {
            type: varchar(50),
            allowNull: false,
            },

        email: {
            type: varchar(50),
            allowNull: false,
            },

        password: {
            type: varchar(50),
            allowNull: false,
            },
        
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    }
);
