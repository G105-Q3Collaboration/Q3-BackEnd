exports.seed = function(knex, Promise) {
  return knex('reactions').insert([
    { id: 1, reaction: 'like' },
    { id: 2, reaction: 'poop' },
    { id: 3, reaction: 'cry' },
    { id: 4, reaction: 'laugh' },
    { id: 5, reaction: 'love' }
  ])
  .then(() => {
    return knex.raw("SELECT setval('reactions_id_seq', (SELECT MAX(id) FROM reactions));")
  })
};
