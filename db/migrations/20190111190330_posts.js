
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
      table.increments();
      table.integer('account_id').notNullable().defaultsTo(0).references('accounts.id').onDelete('CASCADE')
      table.string('content').notNullable().defaultsTo('');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts')
};