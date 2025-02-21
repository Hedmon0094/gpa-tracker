require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "yourUsername", //  MySQL username
    password: "yourPassword", // MySQL password
    database: "yourDatabase" // database name
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log("Connected to the MySQL server.");
});

app.listen(5000, () => console.log("Server running on port 5000"));
