// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

//set up fields and fules for User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
              },
            },

        password: {
            type: varchar(50),
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    }
);

module.exports = User;