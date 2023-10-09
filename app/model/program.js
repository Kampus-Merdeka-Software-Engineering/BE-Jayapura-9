// models/Program.js
const {DataTypes} = require("sequelize");
const sequelize = require("./index");

const Program = sequelize.define("Program", {

    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
    },
    pass: {
        type: DataTypes.STRING,
    },
    kelas: {
        type: DataTypes.STRING,
    },
    dates: {
        type: DataTypes.DATE
    }

});



module.exports = Program;
