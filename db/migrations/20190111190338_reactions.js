
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reactions', table => {
      table.increments();
      table.string('reaction');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reactions')
};
