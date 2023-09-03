const db = require('../db');
const tokensModel = db.model('tokens');
const jwt = require('jsonwebtoken');

class TokenService {
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '10d'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '10d'});
    
        return{
            accessToken: accessToken, 
            refreshToken: refreshToken 
        }
    }

    validateAccessToken(token){
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, userEmail, refreshToken){
        const tokenData = await tokensModel.findOne({where: {"userEmail": userEmail}})

        if (tokenData){
            tokenData.refreshToken = refreshToken;
            return await tokensModel.update(
                {userId, userEmail, refreshToken},
                {where: {'userEmail': userEmail}}
            )
        }

        const token = await tokensModel.create({userId, userEmail, refreshToken});
        return token; 
    }

    async removeToken(refreshToken){
        const tokenData = await tokensModel.destroy({where: {'refreshToken': refreshToken}});
        return tokenData;
    }

    async findToken(refreshToken){
        const tokenData = await tokensModel.findOne({where: {'refreshToken': refreshToken}});
        return tokenData;
    }
}

module.exports = new TokenService();