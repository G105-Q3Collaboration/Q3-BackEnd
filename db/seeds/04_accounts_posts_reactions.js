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
      "SELECT setval('accounts_posts_reactions', (SELECT MAX(id) FROM accounts_posts_reactions));
      ALTER TABLE "accounts_posts_reactions" ADD CONSTRAINT "accounts_posts_reactions_unique" UNIQUE(post_id, account_id);")
  })
};


const TABLE_NAME = 'reviews'

exports.up = knex => {
  return knex.schema.createTable(TABLE_NAME, t => {
    t.increments()
    t.string('title').notNullable()
    t.float('rating', 2, 1).notNullable().defaultsTo(0)
    t.text('comment').notNullable()
    t.integer('account_id').references('accounts.id')
    t.integer('snack_id').references('snacks.id').onDelete('CASCADE')
    t.timestamps(true, true)

    return t
  }).then(t => {
    return knex.schema.raw(
      `ALTER TABLE "accounts_posts_reactions"
       ADD CONSTRAINT "accounts_posts_reactions_unique" UNIQUE(post_id, account_id)`
    )
  })
}