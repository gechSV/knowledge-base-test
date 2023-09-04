const ApiError = require('../exceptions/api-error');
const tokenService = require('../services/token-service');
const roleService = require('../services/role-service')

module.exports = function(roles){
    return async function(req, res, next){
        if(req.method == "OPTIONS"){
            next();
        }

        try {
            const authorizationHeader = req.headers.authorization;
            console.log('authorizationHeader: ', authorizationHeader)
            if(!authorizationHeader){
                return next(ApiError.UnauthorizedError());
            }

            const accesToken = authorizationHeader.split(' ')[1];
            if(!accesToken){
                return next(ApiError.UnauthorizedError());
            }

            const userData = tokenService.validateAccessToken(accesToken);
            if(!userData){
                return next(ApiError.UnauthorizedError());
            }

            const userRoles = await roleService.getUserRoles(userData.id);
            let hasRole = false;

            userRoles.forEach(role => {
                    if(roles.includes(role.roleValue)){
                        hasRole = true;
                    }
                }
            )

            if(!hasRole){
                return next(ApiError.ForbiddenError("У вас нет доступа"));
            }
            
            next();
        } catch (e) {
            return next(ApiError.UnauthorizedError());
        }
    }
}