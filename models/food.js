const { Model, DataTypes } = require('sequelize');// Import the "Model" and "DataTypes" classes from the "sequelize" package
const sequelize = require('../config/connection.js');// Import the "sequelize" connection object from the connection configuration file
class Food extends Model {}// Define a new "Food" model class that extends the "Model" class

Food.init(// Initialize the "Food" model
    {
        // Define the "id" attribute as an integer, with a primary key and auto-increment enabled
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     // Define the "name" attribute as a string, not allowing null values
     name: {
        type: DataTypes.STRING,
        allowNull: false
     },
     // Define the "calories" attribute as text, not allowing null values
     calories: {
        type: DataTypes.INTEGER,
        allowNull: false
     },
     // Define the "price" attribute as text, not allowing null values
     price: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
     }
    },
    {
      // Pass the "sequelize" connection object to the model options
      sequelize,
      // Disable timestamps for the model
      timestamps: false,
      // Freeze the table name to the model name, using underscore syntax
      freezeTableName: true,
      underscored: true,
      // Set the model name as "Food"
      modelName: 'Food',
   }
);

module.exports = Food;// Export the "Food" model