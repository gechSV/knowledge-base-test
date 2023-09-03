const {validationResult} = require('express-validator');
const UserService = require('../services/user-service');


class UserController{

    async registration(req, res, next){
        try {
            const {email, firstname, lastname, patronymic, password} = req.body;

            const userData = await UserService.registration(
                email, firstname, lastname, patronymic, password);

            res.cookie('refreshToken', userData.refreshToken, 
                {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.status(200).json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next){
        try {
            const {email, password} = req.body;
            
            const userData = await UserService.login(email, password);

            res.cookie('refreshToken', userData.refreshToken, 
                {maxAge: 10 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.status(200).json(userData);
        } catch (e) {
            next(e);
        }
    }



}

module.exports = new UserController();


