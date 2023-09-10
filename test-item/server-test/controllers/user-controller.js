const {validationResult} = require('express-validator');
const userService = require('../services/user-service');
const ApiError = require("../exceptions/api-error");


class UserController{

    async registration(req, res, next){
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
            }
            const {email, firstname, lastname, patronymic, password} = req.body;

            const userData = await userService.registration(
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
            
            const userData = await userService.login(email, password);

            res.cookie('refreshToken', userData.refreshToken, 
                {maxAge: 10 * 24 * 60 * 60 * 1000, httpOnly: true});
            console.log("userData: ", userData);
            return res.status(200).json({...userData});
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next){
        try{
            const {refreshToken} = req.cookies; 
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        }
        catch(e) {
            next(e);
        }
    }

    async refresh(req, res, next){
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken,
                {maxAge: 10 * 24 * 60 * 60 * 1000,  httpOnly: true})
            return res.json({...userData});
        } catch (e) {
            next(e);
        }
    }

    async addUserRole(req, res, next){
        try {
            const {userEmail, role} = req.body;
            const newUserRole = await userService.addUserRole(userEmail, role);
            return res.json({newUserRole});

        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next){
        try {
            const users = await userService.getUsers();
            return res.json({...users})
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new UserController();


