// import express & router
const express = require("express");
const router = require("./routes/api.js");

// membuat object express
const app = express();

// menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// menggunakan router
app.use(router);


// define port
app.listen(3000);