const db = require('../db');
const usersModel = db.model('users');
const roleModel = db.model('roles');
const userRolesModel = db.model('userRoles');
const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/api-error');
const UserDto = require('../dtos/user-dto');
const tokenService = require('./token-service');
const roleService = require('./role-service');

class UserService{

    async registration(email, firstname, lastname, patronymic, password){
        const candidate = await usersModel.findOne({where: {email: email}});
        console.log("candidate: ", candidate);
        if(candidate){
           throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует.`);
        }
        // хеширование пароля
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await usersModel.create({email, firstname, lastname, patronymic, "password": hashPassword})
        const userDto = new UserDto(user);
        console.log('userDto: ', userDto);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, userDto.email, tokens.refreshToken);
        
        return {
           ...tokens, 
           user: userDto
        }
    }

    async login(email, password){
        const user = await usersModel.findOne({where: {email: email}});
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
        
        const userRoles = await roleService.getUserRoles(userDto.id);

        return{...tokens, ...userDto, userRoles}
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    
    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        console.log('userData:', userData, '\n', 'tokenFromDb: ', tokenFromDb)
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError();
        }

        const user = await usersModel.findOne({where: {'id': userData.id}});
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, userDto.email, tokens.refreshToken);
        return {...tokens, ...userDto};
    }

    async addUserRole(userEmail, role){
        const userData = await usersModel.findOne({where: {'email': userEmail}});
        if(!userData){
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${userEmail} не найден.`)
        }

        const rolesData = await userRolesModel.findAll({where: {'userEmail': userEmail}});
        let isReadiRole = false;
        rolesData.forEach((roleData) => {
            if(role === roleData.roleValue){
                isReadiRole = true;
            }
        })

        if(isReadiRole){
            throw ApiError.BadRequest(`Пользователь уже имеет роль: ${role}`)
        }

        const roleData = await roleModel.findOne({where: {'value': role}})
        if(!roleData){
            throw ApiError.BadRequest(`Роль ${role} не существует.`)
        }

        const newUserRole = await userRolesModel.create(
            {'userId': userData.id, 'userEmail': userData.email, 'roleValue': roleData.value})
        
        return newUserRole;
    }

    async getUsers(){
        const users = await usersModel.findAll();
        const userDto = []
        users.forEach((user) => {
            userDto.push(new UserDto(user))
        })
        return userDto;  
    }
}

module.exports = new UserService();