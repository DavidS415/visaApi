var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Visa = require('./api/models/visaApiModel'), //created model loading here
  bodyParser = require('body-parser');
  
//url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://visaUser:3k8U9Jl4ejnt25Rr@formsurvey1.dtdgc.mongodb.net/visa_api?retryWrites=true&w=majority"); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/visaApiRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('API server started on port: ' + port);