'use strict';
const mongoose = require('mongoose');
const VisaSchema = new mongoose.Schema({
  visa: {
    type: String
  },
  summary: {
    type: String
  },
  info: {
    type: String
  },
  link: {
    type: String
  }
});

const Visa = mongoose.model('Visas', VisaSchema);
module.exports = Visa;