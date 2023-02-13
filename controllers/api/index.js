const router = require('express').Router();// Import the express package and use the Router() method to create a new router object

const userRoutes = require('../userRoutes');// Import the userRoutes file
const foodRoutes = require('./foodRoutes');// Import the foodRoutes file

router.use('/user', userRoutes);// Use the use() method to add the userRoutes file to the router object
router.use('/food', foodRoutes);// Use the use() method to add the foodRoutes file to the router object

module.exports = router;// Export the router object to be used in the server.js file
