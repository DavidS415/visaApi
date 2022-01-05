'use strict';
module.exports = function(app) {
  var visaApi = require('../controllers/visaApiController');

  // API Routes
  app.route('/visas')
    .get(visaApi.list_all_visas)
    .post(visaApi.add_a_visa);


  app.route('/visas/:visaId')
    .get(visaApi.read_a_visa);

};