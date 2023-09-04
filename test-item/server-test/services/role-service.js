const db = require('../db');
const ApiError = require('../exceptions/api-error');
const rolesModel = db.model('roles');
const userRolesModel = db.model('userRoles');

class RolesService{
    async addNewRole(roleName){
        if(!roleName){
            throw ApiError.BadRequest(`Неверно заданна роль: ${roleName}`)
        }

        const isReadyRole = await rolesModel.findOne({where: {'value': roleName}});

        if (isReadyRole){
            throw ApiError.BadRequest(`Роль ${roleName} существут`)
        }

        const newRole = await rolesModel.create({'value': roleName});
        return newRole;
    }

    async getUserRoles(userId){
        const userRoles = await userRolesModel.findAll({where: {'userId': userId}})
        return userRoles;
    }
}

module.exports = new RolesService();