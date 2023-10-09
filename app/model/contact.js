// models/Contact.js
const { DataTypes } = require("sequelize");
const sequelize = require('./index');

const Contact = sequelize.define("contact", {
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
    },
    company: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
    }
});

module.exports = Contact;
