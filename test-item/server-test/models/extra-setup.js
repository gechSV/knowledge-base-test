function applyExtraSetup(sequelize){
    const {users, tokens, roles, userRoles} = sequelize.models;

    users.hasMany(userRoles);
    userRoles.belongsTo(users);
    roles.hasMany(userRoles);
    userRoles.belongsTo(roles);

}

module.exports = {applyExtraSetup};