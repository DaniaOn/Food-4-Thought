
const router = require('express').Router(); // Importing the 'express' library and creating a new router instance
const Food = require('../models/food.js'); // Importing the 'Food' model


// GET all foods
router.get('/', async (req, res) => {
    try {
        const foodData = await Food.findAll(); // Find all food data
        const foods = foodData.map((food) => food.get({ plain: true })); // Serialize the data
        res.render('food', { foods }); // Render the 'food' template with the serialized data
    } catch (err) {
        res.status(500).json(err); // Return an error message
    }
});

// GET a single food
router.get('/:id', async (req, res) => {
    try {
        const foodData = await Food.findByPk(req.params.id); // Find the food data by primary key
        const food = foodData.get({ plain: true }); // Serialize the data
        res.render('single', food); // Render the 'single' handlebars template with the serialized data
    } catch (err) {
        res.status(500).json(err); // Return an error message
    }
});



module.exports = router; // Export the 'router' module