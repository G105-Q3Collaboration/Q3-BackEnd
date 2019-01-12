exports.seed = function(knex, Promise) {
  return knex('reactions').insert([
    {id:1,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:2,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:3,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:4,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:5,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:6,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:7,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:8,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:9,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:10,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:11,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:12,like:2, sniff:4, sleep:5, growl:2, sad:3},
    {id:13,like:2, sniff:4, sleep:5, growl:2, sad:3}
  ])
  .then(() => {
    return knex.raw("SELECT setval('reactions_id_seq', (SELECT MAX(id) FROM reactions));")
  })
};