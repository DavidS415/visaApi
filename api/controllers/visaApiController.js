'use strict';

const { type } = require('express/lib/response');
const Visa = require('../models/visaApiModel');

//return all visas

const allVisas = (req, res) => {
  Visa.find({}, function(err, allVisasListed){
    if (err) {
      res.send(err);
    } else {
      res
        .json(allVisasListed)
        .status(200);
    }
  })
}

const findThisVisa = (req, res) => {
  const visaName = req.params.name;
  Visa.findOne({ visa: visaName }, function(err, visaDetails) {
    if (err) {
      res.send(err);
    } else {
      res
        .json(visaDetails)
        .status(200);
    }
  })
}

module.exports = {
  allVisas,
  findThisVisa
}