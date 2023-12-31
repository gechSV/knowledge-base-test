module.exports = class ApiError extends Error{
    status; 
    errors;

    constructor(status, message, errors){
        super(message);
        this.status = status; 
        this.errors = errors; 
    }

    static UnauthorizedError() { 
        return new ApiError(401, 'Пользователь не авторизовн');
    }
    
    static BadRequest(message, errors = []) { 
        return new ApiError(401, message, errors);
    }

    static ForbiddenError(message, errors = []){
        return new ApiError(403, message, errors);
    } 
}