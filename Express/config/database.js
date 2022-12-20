// import database & .env
const mysql = require("mysql");
require("dotenv").config();

// destructuring
const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
} = process.env;

// membuat connection
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
})

db.connect((err) => {
    if (err) {
        console.log("Error connecting " + err.stack);
        return;
    } else {
        console.log("Connected to Database");
        return;
    }
});

module.exports = db;