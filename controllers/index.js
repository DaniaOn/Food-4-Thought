const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const apiRoutes = require('./api');// Import the api routes from the api folder
const homeRoutes = require('./home-routes.js');// Import the home routes from the home-routes.js file
// const foodRoutes = require('./api/food-routes');// Import the food routes from the food-routes.js file
// const userRoutes = require('./api/user-routes');// Import the user routes from the user-routes.js file

router.use('/', homeRoutes);// Use the home routes when the user visits the homepage (localhost:3001/)
router.use('/api', apiRoutes);// Use the api routes when the user visits any route that starts with /api (localhost:3001/api)
// router.use('/food', foodRoutes);// Use the food routes when the user visits any route that starts with /api/food (localhost:3001/api/food)
// router.use('/api/users', userRoutes);// Use the user routes when the user visits any route that starts with /api/users (localhost:3001/api/users)

module.exports = router;// Export the router object to be used in the server.js file
