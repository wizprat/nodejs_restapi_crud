const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const route = require("./routes");
const cors = require("cors");
const volleyball = require("volleyball");
app.use(volleyball);
const db = require("./config/connection");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(cors({ credentials: true, origin: 'http://localhost:5000' }));
app.use(route);
require('dotenv').config();

async function connect() {
    try {
        await db.authenticate();
        console.log('database terhubung');
        // await models.user.sync();
    } catch (error) {
        console.error(error);
    }
}

connect();

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log('Listening to port ' + port)
);
