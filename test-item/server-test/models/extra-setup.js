function applyExtraSetup(sequelize){
    const {users, tokens, roles, userRoles} = sequelize.models;

    // users_has_many_many_users_has_many_tokens
    users.hasMany(userRoles);
    userRoles.belongsTo(users);
    roles.hasMany(userRoles);
    userRoles.belongsTo(roles);
    
    // users_has_many_tokens
    users.hasMany(tokens);
    tokens.belongsTo(users)
}

module.exports = {applyExtraSetup};