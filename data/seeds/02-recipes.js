exports.seed = function(knex) {
    return knex('recipes').insert([
      {recipe_name: 'Chicken Pasta with Sauce',
        instructions: 'Boil water, add pasta. Cook until done. Drain. Then add sauce and cooked chicken.'},
      {recipe_name: 'Apple Pie', 
        instructions: 'Make dough with all ingredients except apple and sugar. Roll into crust. Mix apples and sugar. Add to the raw crust. Bake at 350 for two hours.'}
    ]);
  };