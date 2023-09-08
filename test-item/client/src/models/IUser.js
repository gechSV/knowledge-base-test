export class IUser{
    id;
    email;
    firstname; 
    lastname; 
    patronymic;
    roles;

    constructor(model){
        this.id = model.id;
        this.email = model.email;
        this.firstname = model.firstname;
        this.lastname = model.lastname;
        this.patronymic = model.patronymic;
        this.roles = model.userRoles;
    }
}