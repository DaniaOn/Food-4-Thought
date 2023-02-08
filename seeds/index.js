const seedFood = require('./food-seeds.js');// Import the "seedFood" array from the food seeds file
const sequelize = require('../config/connection.js');// Import the "sequelize" connection object from the connection configuration file

const seedDb = async () => {// Define an asynchronous function to seed the database
    try {
        await sequelize.sync({ force: true });// Synchronize the database, dropping any existing tables and recreating them
        console.log('\n ===== DATABASE SYNCED =====\n');// Log a message to the console

        await seedFood();// Seed the database with the "seedFood" array
        console.log('\n ===== FOOD SEEDED =====\n');// Log a message to the console

        process.exit(0);// Exit the process
    } catch (error) {
        console.error(error);
        process.exit(1);
        }
};
seedDb();// Call the "seedDb" function