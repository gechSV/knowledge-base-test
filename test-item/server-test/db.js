const {Sequelize} = require('sequelize');
const {applyExtraSetup} = require('./models/extra-setup');

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT,
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