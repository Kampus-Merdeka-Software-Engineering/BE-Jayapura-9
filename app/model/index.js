const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize("group-9-jayapura", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

module.exports = connection