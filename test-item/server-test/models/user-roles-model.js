const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'userRoles',
        {
            id: {
                allowNull: false,
			    autoIncrement: true,
			    primaryKey: true,
                type: DataTypes.INTEGER,   
            },
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
            roleValue: {
                allowNull: false,
                type: DataTypes.STRING,
                references: {
                    model: sequelize.model('roles'),
                    key: 'value'
                }
            }
        },
        {
            timestamps: false
        }
    );    
}

