exports.seed = function(knex, Promise) {
  return knex('accounts_posts_reactions').insert([
    {post_id}, {account_id}, {reactions}
  ])
  .then(() => {
    return knex.raw("SELECT setval('accounts_posts_reactions', (SELECT MAX(id) FROM accounts_posts_reactions));")
  })
};
