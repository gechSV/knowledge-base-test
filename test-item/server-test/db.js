const {Sequelize} = require('sequelize');
const {applyExtraSetup} = require('./models/extra-setup');

const sequelize = new Sequelize({
    database: 'knowledge_base_db',
    username: 'postgres',
    password: 'sadamit2242',
    host: 'localhost', 
    dialect: 'postgres',
    logging: false
})

const modelDefiners = [
    require('./models/user-model'),
    require('./models/roles-model'),
    require('./models/token-model'),
    require('./models/user-roles-model'),
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;