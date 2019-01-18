exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts_posts_reactions', table => {
      table.increments();
      table.integer('post_id').references('posts.id').onDelete('CASCADE');
      table.integer('account_id').references('accounts.id').onDelete('CASCADE');
      table.integer('reaction_id').references('reactions.id').onDelete('CASCADE');
      table.timestamps(true, true);
  })
  .then(t => {
    return knex.schema.raw(
      `ALTER TABLE "accounts_posts_reactions"
      ADD CONSTRAINT "accounts_posts_reactions_unique" UNIQUE(account_id, post_id)`
    )
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('accounts_posts_reactions');
};
