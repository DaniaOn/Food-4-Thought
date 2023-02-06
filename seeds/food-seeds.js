const Food = require('./Food');// Import the "Food" model

const foodData = [  // create an array of objects to seed the database with
    {
        name: 'apple',
        calories: 95,
        price: 0.99
    },
    {
        name: 'banana',
        calories: 105,
        price: 0.79
    },
    {
        name: 'carrot',
        calories: 41,
        price: 0.59
    },
    {
        name: 'chicken breast',
        calories: 165,
        price: 3.99
    },
    {
        name: 'bread',
        calories: 80,
        price: 1.49
    },
    {
        name: 'almond',
        calories: 162,
        price: 5.99
    },
    {
        name: 'orange',
        calories: 47,
        price: 0.69
    },
    {
        name: 'grapes',
        calories: 69,
        price: 2.49
    },
    {
        name: 'strawberries',
        calories: 49,
        price: 3.99
    },
    {
        name: 'spinach',
        calories: 7,
        price: 1.99
    },
    {
        name: 'salmon',
        calories: 209,
        price: 8.99
    },
    {
        name: 'eggs',
        calories: 72,
        price: 2.49
    },
    {
        name: 'avocado',
        calories: 234,
        price: 2.99
    },
    {
        name: 'potatoes',
        calories: 130,
        price: 0.99
    },
    {
        name: 'tofu',
        calories: 120,
        price: 2.99
    },
    {
        name: 'peanut butter',
        calories: 188,
        price: 3.99
    }
]

const seedFood = () => Food.bulkCreate(foodData); // Define seedFood function to seed the database with the "foodData" array
module.exports = seedFood; // Export the "seedFood" function