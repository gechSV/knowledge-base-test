const ApiError = require('../exceptions/api-error');
const {validationResult} = require('express-validator');
const db = require('../db');

const users = db.model('users');

class UserController{

    async getInf(req, res, next){
        try {
            await users.create({
                email: "test1@mail.ru",
                firstname: "test",
                lastname: 'test',
                password: 'sdaasda'
            })
            console.log(db.model("users"))
            return res.status(200).json({"message": "ok"});   
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new UserController();


