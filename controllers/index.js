const router = require('express').Router();

const foodroutes = require('../controllers/foodroutes');

router.use('/foods', foodroutes);

module.exports = router;

