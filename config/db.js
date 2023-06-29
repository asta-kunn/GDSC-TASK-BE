const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: 'rifqi080203',
    port: '5432',
    dialect: 'postgres',
    logging: true,
    // set search_path to schema name
    define: {
        schema: 'todos'
    }

})

module.exports = sequelize