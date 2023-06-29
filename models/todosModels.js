const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Todos = sequelize.define('todos', {
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
    priority: {
        type: DataTypes.STRING,
    },
    due_date: {
        type: DataTypes.DATEONLY,
    },
}, {
        schema: 'todos',
        freezeTableName: true,
        timestamps: false,
    })


module.exports = Todos;