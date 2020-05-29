const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv/config'); 

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("db is connecsted"))

const routes = require("./routes");

app.use(express.json());


app.use(routes);


app.listen(3333);