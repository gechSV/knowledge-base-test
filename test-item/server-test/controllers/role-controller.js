const roleService = require('../services/role-service');

class RoleController{
    async addNewRole(req, res, next){
        try {
            const {roleName} = req.body;
            console.log('roleName: ', roleName);
            const newRole = await roleService.addNewRole(roleName);
            return res.json({newRole});

        } catch (e) {
            next(e);
        }
    }

    async test(req, res, next){
        try {
            return res.json(roleService.getUserRoles(1))
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new RoleController();