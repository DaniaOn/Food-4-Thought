const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const foodRoutes = require('./food-routes');// Import the food routes from the food-routes.js file
const userRoutes = require('./user-routes');// Import the user routes from the user-routes.js file

router.use('/food', foodRoutes);// Use the food routes when the user visits any route that starts with /foods (localhost:3001/foods)
router.use('/users', userRoutes);// Use the user routes when the user visits any route that starts with /users (localhost:3001/users)

module.exports = router;// Export the router object to be used in the server.js file
