const {DataTypes} = require('sequelize');

// ORM Модель токена 
module.exports = (sequelize) =>{
    sequelize.define(
        'tokens', 
        {
            refreshToken:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            }
        },
        {
            timestamps:false
        }
    )    
} 
