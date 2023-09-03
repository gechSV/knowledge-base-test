module.exports = class UserDto{
    id;
    email;
    firstname; 
    lastname; 
    patronymic;

    constructor(model){
        this.id = model.id;
        this.email = model.email;
        this.firstname = model.firstname;
        this.lastname = model.lastname;
        this.patronymic = model.patronymic;
    }
}