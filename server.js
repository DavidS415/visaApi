const express = require('express');
const app = express();
const mongoose = require('mongoose');
bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())

// Mongo DB conncetion
mongoose
    .connect('mongodb+srv://visaUser:3k8U9Jl4ejnt25Rr@formsurvey1.dtdgc.mongodb.net/visa_api?retryWrites=true&w=majority')
    .then(() => console.log('e don connect'))
    .catch(err => console.log(err));


//BodyParsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/', require('./api/routes/visaApiRoutes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server has started at port " + PORT))