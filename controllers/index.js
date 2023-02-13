const router = require('express').Router();

const foodroutes = require('./api/foodRoutes.js');
const loginRoutes = require('./loginRoutes.js');
// const userRoutes = require('./userRoutes.js');

// router.use('/', foodroutes);
router.use('/login', loginRoutes);
// router.use('/user', userRoutes);

module.exports = router;
