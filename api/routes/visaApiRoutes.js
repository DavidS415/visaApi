const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const { allVisas, findThisVisa } = require('../controllers/visaApiController');

router.get('/visas', allVisas);
router.get('/visas/:name', findThisVisa);

module.exports = router;