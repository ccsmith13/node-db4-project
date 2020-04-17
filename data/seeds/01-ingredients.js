exports.seed = function(knex) {
    return knex('ingredients').insert([
      {ingredient_name: 'eggs'},
      {ingredient_name: 'flour'},
      {ingredient_name: 'butter'},
      {ingredient_name: 'sugar'},
      {ingredient_name: 'tomato'},
      {ingredient_name: 'pasta'},
      {ingredient_name: 'chicken'},
      {ingredient_name: 'milk'},
      {ingredient_name: 'apple'},
    ]);
  };