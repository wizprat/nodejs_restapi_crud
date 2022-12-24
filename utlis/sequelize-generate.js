require('dotenv').config();
const SequelizeAuto = require("sequelize-auto");
const auto = new SequelizeAuto(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    directory: "./models",
    caseFile: "c",
    // caseModel: "c",
    // caseProp: "c",
    singularize: true,
    spaces: true,
    indentation: 2,
    additional: {
        timestamps: false,
        // ...options added to each model
    },
}
);

auto.run();