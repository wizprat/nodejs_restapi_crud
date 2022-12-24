const sequelize = require("sequelize");
const sequelizefile = require("../utlis/sequelize-file");

const connection = new sequelize(sequelizefile.development);

module.exports = connection;
