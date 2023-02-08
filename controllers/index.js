const router = require('express').Router();

const foodroutes = require('/foodroutes.js');

router.use('/foods', foodroutes);

module.exports = router;

