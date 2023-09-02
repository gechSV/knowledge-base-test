const {DataTypes} = require('sequelize');

// ORM модель ролей пользователей
module.exports = (sequelize) =>{
    sequelize.define(
        'roles',
        {
            value:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    )
} 
