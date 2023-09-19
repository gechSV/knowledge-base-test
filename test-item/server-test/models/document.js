const {DataTypes} = require('sequelize');


// ORM Модель документа
module.exports = (sequelize) => {
    sequelize.define(
        'documents', 
        {
            id:{
                allowNull: false,
			    autoIncrement: true,
			    primaryKey: true,
                unique: true,
			    type: DataTypes.INTEGER
            },
            data: {
                type: DataTypes.ARRAY(DataTypes.JSON),
            }, 
            verified: {
                type: DataTypes.BOOLEAN
            }
        }
    )
}