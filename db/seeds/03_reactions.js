exports.seed = function(knex, Promise) {
  return knex('reactions').insert([
    {id},{like},{sniff},{sleep},{growl},{sad}
  ])
  .then(() => {
    return knex.raw("SELECT setval('reactions_id_seq', (SELECT MAX(id) FROM reactions));")
  })
};