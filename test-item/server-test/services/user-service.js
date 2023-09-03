const db = require('../db');
const users = db.model('users');
const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/api-error');
const UserDto = require('../dtos/user-dto');
const TokenService = require('./token-service');
const tokenService = require('./token-service');

class UserService{

    async registration(email, firstname, lastname, patronymic, password){
        const candidate = await users.findOne({where: {email: email}});
        console.log("candidate: ", candidate);
        if(candidate){
           throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует.`);
        }
        // хеширование пароля
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await users.create({email, firstname, lastname, patronymic, "password": hashPassword})
        const userDto = new UserDto(user);
        console.log('userDto: ', userDto);
        const tokens = TokenService.generateTokens({...userDto});
        await TokenService.saveToken(userDto.id, userDto.email, tokens.refreshToken);
        
        return {
           ...tokens, 
           user: userDto
        }
    }

    async login(email, password){
        const user = await users.findOne({where: {email: email}});
        console.log("User data for login: ", user);
        if(!user){
           throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} не найден.`);
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, userDto.email, tokens.refreshToken);
        return{...tokens, userDto}
    }

}

module.exports = new UserService();