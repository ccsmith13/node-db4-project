exports.seed = function(knex) {
    return knex('recipe-ingredients').insert([
    {recipe_id: 2,
        ingredient_id: 1,
        ingredient_amount:1,
        ingredient_unit: "yolk"},
    {recipe_id: 2,
        ingredient_id: 2,
        ingredient_amount:1,
        ingredient_unit: "cup"
        },
    {recipe_id: 1,
        ingredient_id: 5,
        ingredient_amount: 1,
        ingredient_unit:"medium"
    },
    {recipe_id: 1,
        ingredient_id: 6,
        ingredient_amount: 2,
        ingredient_unit:"cups"
    },
    {recipe_id: 1,
        ingredient_id: 7,
        ingredient_amount: 1,
        ingredient_unit:"cup, cubed"
    },
    ]);
  };