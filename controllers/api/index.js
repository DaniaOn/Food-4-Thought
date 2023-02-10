const router = require('express').Router();

const foodroutes = require('../foodroutes');

router.use('/foods', foodroutes);

module.exports = router;

