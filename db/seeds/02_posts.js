exports.seed = function(knex, Promise) {
  return knex('posts').insert([
    {id:1, account_id:1, content:"I just coughed up a hairball. This is the worst"},
    {id:2, account_id:1, content:"I loathe my owners. They don't tend to me every need at the drop of a dime."},
    {id:3, account_id:2, content:"They say owners look like their pets. My owner isn't that handsome. Im offended."},
    {id:4, account_id:2, content:"#puplife"},
    {id:5, account_id:3, content:"Just watched An American Tail. Not impressed."},
    {id:6, account_id:3, content:"Why do people assume that I live in a small archway in your baseboard? Thats speciesist. #ignorant"},
    {id:7, account_id:4, content:"Im not poisonous. Please love me."},
    {id:8, account_id:4, content:"I cant wait to shed this skin. #summerclothes"},
    {id:9, account_id:5, content:"I can fly. But I prefer to dance."},
    {id:10, account_id:5, content:"#lookoutbelow!!"},
    {id:11, account_id:6, content:"I'm totally not poisonous. #comecloser"},
    {id:12, account_id:6, content:"I don't rattle. You won't hear me coming"},
    {id:13, account_id:7, content:"Rub my belly and you will regret it! #havesomeboundaries"},
    {id:14, account_id:7, content:"ITS BACON!!!"},
    {id:15, account_id:8, content:"Heres to drinking out of an upside bottle with a dropper #guinealife"},
    {id:16, account_id:8, content:"I am not from New Guinea, nor am I a pig. #confusingnameorigin"},
    {id:17, account_id:9, content:"You can't resist this face. Go ahead try."},
    {id:18, account_id:9, content:"Oh snap! What time is it? Its walk time mofo!! #steadywalkin"},
    {id:19, account_id:10, content:"My cousin got turned into a suitcase last week. Still in the grieving process. #endgatorcide"},
    {id:20, account_id:10, content:"Bet you are jealous of my swamp on hot days, huh?"},
    {id:21, account_id:11, content:"Don't be afraid of me. I am more afraid of you. I would win in an afraid-off competition."},
    {id:22, account_id:11, content:"Who are they calling creepy? #wordshurt"},
    {id:23, account_id:12, content:"I am beginning to think that this treasure chest in my tank isn't actually full of real treasure. Suspicious fish is suspicious."},
    {id:24, account_id:12, content:"Screw Nemo! Where is Gus' movie? #mytickettostardom"},
    {id:25, account_id:13, content:"Where did you go my sweet Artorias? #Ftheabyss"},
    {id:26, account_id:13, content:"I don't hunt in a pack. I am a one wolf wolf-pack."},
    {id:27, account_id:14, content:"#allhailthekingbaby"},
    {id:28, account_id:14, content:"No I don't have any hyena friends. Though I would be open to it."},
    {id:29, account_id:15, content:"All this flapping is making me feel like napping! #turtlenap"},
    {id:30, account_id:15, content:"Man Im getting old. All my sealife friends have passed away. #oldturtleproblems"}
  ])
  .then(() => {
    return knex.raw("SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));")
  })
};
