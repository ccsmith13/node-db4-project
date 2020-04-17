
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128)
        .notNullable()
        .unique();
      tbl.string('instructions')
        .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128)
          .notNullable()
          .unique();
      })
      .createTable('recipe-ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.float('ingredient_amount')
          .notNullable();
        tbl.string('ingredient_unit', 128)
            .notNullable();

      });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe-ingredients');
};
