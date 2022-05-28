const express = require('express');
const app = express();
const mongoose = require('mongoose');
bodyParser = require('body-parser');
var cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

app.use(cors())

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;

mongoose
    .connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('e don connect'))
    .catch(err => console.log(err));


//BodyParsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/', require('./routes/visaApiRoutes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server has started at port " + PORT))