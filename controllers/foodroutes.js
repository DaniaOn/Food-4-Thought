const router = require('express').Router(); // Importing the 'express' library and creating a new router instance
const path = require('path');  
const Food = require('../models/food.js'); // Importing the 'Food' model

//HTML GET route
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
  });



module.exports = router; // Export the 'router' module