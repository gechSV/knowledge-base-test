const {DataTypes} = require('sequelize');

// ORM Модель пользователя 
module.exports = (sequelize) => {
    sequelize.define(
        'users', 
        {
            id:{
                allowNull: false,
			    autoIncrement: true,
			    primaryKey: true,
                unique: true,
			    type: DataTypes.INTEGER
            },
            email:{
                type: DataTypes.STRING,
                primaryKey: true,
                unique: true,
                allowNull: false,
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false,
            }, 
            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            patronymic: {
                type: DataTypes.STRING,
                allowNull: false,
            }, 
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        } 
    )
} 
