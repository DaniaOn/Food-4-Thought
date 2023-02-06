const { Model, DataTypes } = require('sequelize');// Import the "Model" and "DataTypes" classes from the "sequelize" package
const sequelize = require('../config/connection.js');// Import the "sequelize" connection object from the connection configuration file
class Food extends Model {}// Define a new "Food" model class that extends the "Model" class

Food.init()// Initialize the "Food" model
