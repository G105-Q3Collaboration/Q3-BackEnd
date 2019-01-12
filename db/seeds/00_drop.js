exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts_posts_reactions').del()
    .then(() => {
      return knex('reactions').del()
    })
    .then(() => {
      return knex('posts').del()
    })
    .then(() => {
      return knex('accounts').del()
    })
};
