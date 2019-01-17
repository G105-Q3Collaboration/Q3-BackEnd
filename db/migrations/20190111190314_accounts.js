exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts', table => {
      table.increments();
      table.string('username').notNullable().defaultsTo('');
      table.string('password').notNullable().defaultsTo('');
      table.string('displayname').notNullable().defaultsTo('');
      table.string('profilepic');
      table.string('eatinghabits');
      table.string('quirks');
      table.string('bio');
      table.integer('age');
      table.string('type');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('accounts')
};