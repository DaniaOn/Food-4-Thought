const User = require('./User');// Import the User model
const Food = require('./Food');// Import the Food model
const Category = require('./Category');// Import the Category model

Category.hasMany(Food, {// category hasMany food (one-to-many)
	foreignKey: 'categoryId',// use the categoryId column from the Food model as the foreign key
	onDelete: 'CASCADE',// delete all associated foods when a category is deleted
});

Food.belongsTo(Category, {// food hasOne category (one-to-one)
	foreignKey: 'categoryId',// use the categoryId column from the Food model as the foreign key
});

module.exports = { User, Food, Category };// export the User, Food, and Category models to be used in other parts of the application
