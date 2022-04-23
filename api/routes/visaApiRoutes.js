const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const { allVisas, findThisVisa, visaInstructions, errorHandler } = require('../controllers/visaApiController');

router.get('/', errorHandler(visaInstructions));
router.get('/visas', errorHandler(allVisas));
router.get('/visas/:name', errorHandler(findThisVisa));

module.exports = router;