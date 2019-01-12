
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reactions', table => {
      table.increments();
      table.string('like');
      table.string('sniff');
      table.string('sleep');
      table.string('growl');
      table.string('sad');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reactions')
};