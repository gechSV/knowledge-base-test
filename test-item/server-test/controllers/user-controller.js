const ApiError = require('../exceptions/api-error');
const {validationResult} = require('express-validator');

class UserController{

    async getInf(req, res, next){
        try {
            return res.status(200).json({"message": "ok"});   
        } catch (error) {
            next(e);
        }
    }

}

module.exports = new UserController();


