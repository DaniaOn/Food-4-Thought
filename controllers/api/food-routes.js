const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const { Food, Category } = require('../../models');// Import the Food and Category models from the models folder

router.get('/', async (req, res) => {// Use the get() method to create a GET route for the homepage (localhost:3001/)
	try {
		const dbFoodData = await Food.findAll({// Use the findAll() method to get all Food objects from the database and store them in the dbFoodData variable
			include: [// Use the include property to include the Category model
				{
					model: Category,// Specify the Category model
					attributes: ['name'],// Specify the id attribute from the Category model
				},
			],
		});
		const foods = dbFoodData.map((food) =>// Use the map() method to iterate over the dbFoodData array and return a new array with the data from each Food object
			food.get({ plain: true })// Use the get() method to get the data from the Food object and store it in the plain object (plain: true) and return it to the foods array
		);
		req.session.save(() => {// Use the save() method to save the session data to the database
			if (req.session.countVisit) {
				req.session.countVisit++ // If the countVisit property exists, increment it by 1
			} else {
				req.session.countVisit = 1 // If the countVisit property does not exist, set it to 1
			}
			res.render('allFood', { // Use the render() method to render the homepage handlebar
			foods, // Pass in the foods variable
			countVisit: req.session.countVisit, // Pass in the countVisit property
			loggedIn: req.session.loggedIn, // Pass in the loggedIn property
		});
	}); 
	} catch (err) {
		console.log(err);// If there is an error, log it to the console
		res.status(500).json(err);// If there is an error, return a status code of 500 and the error message in JSON format
	}
});

// GET one food
router.get('/:id', async (req, res) => {// Use the get() method to create a GET route for a single food (localhost:3001/food/1)
	try {
		const dbFoodData = await Food.findByPk(req.params.id, {// Use the findByPk() method to get a single Food object from the database and store it in the dbFoodData variable
			include: [// Use the include property to include the Category model
				{
					model: Category,// Specify the Category model
					attributes: ['name',],// Specify the attributes to include from the Category model id
				},
			],
		});
		const food = dbFoodData.get({ plain: true });// Use the get() method to get the data from the Food object and store it in the plain object (plain: true) and return it to the food variable
		res.render('single', food);// Use the render() method to render the food handlebar and pass in the food variable and loggedIn property
	} catch (err) {
		console.log(err);// If there is an error, log it to the console
		res.status(500).json(err);// If there is an error, return a status code of 500 and the error message in JSON format
	}
});

module.exports = router;// Export the router object to be used in the server.js file