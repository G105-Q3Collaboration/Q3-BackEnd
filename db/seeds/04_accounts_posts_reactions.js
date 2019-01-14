exports.seed = function(knex, Promise) {
  return knex('accounts_posts_reactions').insert([
    {id:1, post_id:1, account_id:1,reactions:8},
    {id:2, post_id:1, account_id:2,reactions:8},
    {id:3, post_id:1, account_id:3,reactions:8},
    {id:4, post_id:2, account_id:4,reactions:8},
    {id:5, post_id:2, account_id:5,reactions:8},
    {id:6, post_id:2, account_id:1,reactions:8},
    {id:7, post_id:3, account_id:2,reactions:8},
    {id:8, post_id:3, account_id:3,reactions:8},
    {id:9, post_id:3, account_id:4,reactions:8},
    {id:10, post_id:4, account_id:5,reactions:8},
    {id:11, post_id:4, account_id:1,reactions:8},
    {id:12, post_id:4, account_id:2,reactions:8},
    {id:13, post_id:5, account_id:3,reactions:8},
    {id:14, post_id:5, account_id:4,reactions:8},
    {id:15, post_id:5, account_id:5,reactions:8},
    {id:16, post_id:6, account_id:1,reactions:8},
    {id:17, post_id:6, account_id:2,reactions:8},
    {id:18, post_id:6, account_id:3,reactions:8},
    {id:19, post_id:7, account_id:4,reactions:8},
    {id:20, post_id:7, account_id:5,reactions:8},
    {id:21, post_id:7, account_id:1,reactions:8},
  ])
  .then(() => {
    return knex.raw(
      "SELECT setval('accounts_posts_reactions_id_seq', (SELECT MAX(id) FROM accounts_posts_reactions));")
  })
};