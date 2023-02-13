const dotenv = require('dotenv'); // importing dotenv
dotenv.config(); // calling config method on dotenv

const {Sequelize} = require('sequelize'); // importing sequelize class from sequelize

const sequelize = new Sequelize(// Create connection to our database, pass in db name, user, and password
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
	host: process.env.DB_HOST || 'localhost',// If no host is specified, use localhost
	dialect: 'mysql',// Specify the database dialect
	port: process.env.DB_PORT || 3306,// If no port is specified, use 3306
});

module.exports = sequelize;

