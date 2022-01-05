'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VisaSchema = new Schema({
  type: {
    type: String
  },
  info: {
    type: String
  },
  link: {
    type: String
  }
});

module.exports = mongoose.model('Visas', VisaSchema);