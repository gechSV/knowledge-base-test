const db = require('../db');
const Token = db.model('tokens');
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
        const tokenData = await Token.findOne({where: {"userEmail": userEmail}})

        if (tokenData){
            tokenData.refreshToken = refreshToken;
            return await Token.update(
                {...tokenData},
                {where: {'userEmail': userEmail}}
            )
        }

        const token = await Token.create({userId, userEmail, refreshToken});
        return token; 
    }
}

module.exports = new TokenService();