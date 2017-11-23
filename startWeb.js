const express = require("express")
const app = express();
const Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");
const fs = require('fs'); 

const routes = require('./routes/routes.js')(app, express, fs);


// app.use('/node_modules', express.static(__dirname + '/node_modules'));


// app.get("/", (req, res) => {
// 	res.sendFile(__dirname + "/public/index.html");
// })



app.listen(3000);