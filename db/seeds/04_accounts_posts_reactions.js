exports.seed = function(knex, Promise) {
  return knex('accounts_posts_reactions').insert([
    {post_id:1, account_id:1,reactions:[]},
    {post_id:1, account_id:2,reactions:[]},
    {post_id:1, account_id:3,reactions:[]},
    {post_id:2, account_id:4,reactions:[]},
    {post_id:2, account_id:5,reactions:[]},
    {post_id:2, account_id:1,reactions:[]},
    {post_id:3, account_id:2,reactions:[]},
    {post_id:3, account_id:3,reactions:[]},
    {post_id:3, account_id:4,reactions:[]},
    {post_id:4, account_id:5,reactions:[]},
    {post_id:4, account_id:1,reactions:[]},
    {post_id:4, account_id:2,reactions:[]},
    {post_id:5, account_id:3,reactions:[]},
    {post_id:5, account_id:4,reactions:[]},
    {post_id:5, account_id:5,reactions:[]},
    {post_id:6, account_id:1,reactions:[]},
    {post_id:6, account_id:2,reactions:[]},
    {post_id:6, account_id:3,reactions:[]},
    {post_id:7, account_id:4,reactions:[]},
    {post_id:7, account_id:5,reactions:[]},
    {post_id:7, account_id:1,reactions:[]},
  ])
  .then(() => {
    return knex.raw(
      "SELECT setval('accounts_posts_reactions', (SELECT MAX(id) FROM accounts_posts_reactions));")
  })
};