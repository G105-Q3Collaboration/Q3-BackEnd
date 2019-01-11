exports.seed = function(knex, Promise) {
  return knex('posts').insert([
    {id:1, account_id:1, content:"I just coughed up a hairball. This is the worst"},
    {id:2, account_id:1, content:"I loathe my owners. They don't tend to me every need at the drop of a dime."},
    {id:3, account_id:2, content:"They say owners look like their pets. My owner isn't that handsome. Im offended."},
    {id:4, account_id:2, content:"#puplife"},
    {id:5, account_id:3, content:"Just watched An American Tail. Not impressed."},
    {id:6, account_id:3, content:},
    {id:7, account_id:4, content:},
    {id:8, account_id:4, content:},
    {id:9, account_id:5, content:},
    {id:10, account_id:5, content:}
  ])
  .then(() => {
    return knex.raw("SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));")
  })
};
