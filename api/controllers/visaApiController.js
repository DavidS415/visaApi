'use strict';

const { type } = require('express/lib/response');


var mongoose = require('mongoose'),
  Visa = mongoose.model('Visas');

exports.list_all_visas = function(req, res) {
  Visa.find({}, function(err, visa) {
    if (err)
      res.send(err);
    res.json(visa);
  });
};

exports.add_a_visa = function(req, res) {
    var new_visa = new Visa(req.body);
    new_visa.save(function(err, visa) {
      if (err)
        res.send(err);
      res.json(visa);
    });
  };

exports.read_a_visa = function(req, res) {
  Visa.findOne({}, function(err, visa) {
    if (err)
      res.send(err);
    res.json(visa);
  });
};