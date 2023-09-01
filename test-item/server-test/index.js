require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const errorMiddleware = require('./middleware/error-middleware')
const { Sequelize } = require('sequelize')


const PORT = process.env.PORT || 5000;
const app = express()
const sequelize = new Sequelize('knowledge_base_db', 'postgres', 'admin', {
    host: 'localhost', 
    port : 54320,
    dialect: 'postgres'
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    // origin: process.env.CLIENT_URL, 
    origin: "*"
}))


app.use('/api', router);
app.use(errorMiddleware); // должна быть последней в цепочку app.use

const start = async () => {
    try{
        await sequelize.authenticate()
        app.listen(PORT, () => console.log(`Server started on: http://localhost:${PORT}`)) 
    }
    catch(e){
        console.log(e);
    }
}

start()