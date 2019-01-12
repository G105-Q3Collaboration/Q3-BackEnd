exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts_posts_reactions', table => {
      table.increments();
      table.integer('post_id').notNullable();
      table.foreign('post_id').references('posts.id').onDelete('CASCADE')
      table.integer('account_id').notNullable();
      table.foreign('account_id').references('accounts.id').onDelete('CASCADE')
      table.string('reactions')
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('accounts_posts_reactions');
    
};