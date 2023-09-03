const {DataTypes} = require('sequelize');

// ORM Модель токена 
module.exports = (sequelize) =>{
    sequelize.define(
        'tokens', 
        {
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: sequelize.model('users'),
                    key: 'id'
                }
            },
            userEmail: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: sequelize.model('users'),
                    key: 'email'
                }
            },
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
