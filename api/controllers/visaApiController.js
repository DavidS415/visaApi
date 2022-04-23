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

//return a specific visa

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

const visaInstructions = (req, res) => {
  res.send('You formatted your request incorrectly, please review instructions at wwww.url.com');
}

const errorHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(err => {
      if (err.name === 'BadRequestError') {
        res.status(400).send({ msg: err.message });
      } else {
        res.status(500).send({ msg: 'Internal Server Error' })
      }
    });
};

module.exports = {
  allVisas,
  findThisVisa,
  visaInstructions,
  errorHandler
}