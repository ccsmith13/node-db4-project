const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList, 
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipe-ingredients as c')
    .select('i.ingredient_name', 'c.ingredient_amount','c.ingredient_unit')
    .join('recipes as r', 'r.id', 'c.recipe_id')
    .join('ingredients as i','i.id', 'c.ingredient_id')
    .where({'c.recipe_id':recipe_id})
}

function getInstructions(recipe_id){
    return db('recipes as r')
    .select('r.instructions')
    .where({'r.id':recipe_id})
}

