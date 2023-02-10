const router = require('express').Router();

const apiRoutes = require('./api');
const foodroutes = require('./foodroutes.js');

router.use('/', foodroutes);
router.use('/api', apiRoutes);

module.exports = router;
