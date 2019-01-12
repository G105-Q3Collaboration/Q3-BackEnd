exports.seed = function(knex, Promise) {
  return knex('accounts').insert([
    {id:1, username:"meowser", type:"cat", password:"123", displayname: "Big Damage", profilepic:"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", eatinghabits:"often", quirks:"sleeps in boxes",age:14,bio:"I believe in nothing. I was born bloody and screaming. I will probably go out the same way",interactions:1},
    {id:2, username:"bigWood", type:"dog", password:"456", displayname: "HotDog4U", profilepic:"https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1484159404151.adapt.1900.1.jpg", eatinghabits:"whenever its clever", quirks:"catches my own tail",age:3,bio:"I think that the Godather is an overrated movie.",interactions:2},
    {id:3, username:"fievel", type:"mouse", password:"789", displayname: "ThePatriotsSuck206", profilepic:"https://cdn.images.express.co.uk/img/dynamic/130/590x/secondary/A-mouse-1028634.jpg", eatinghabits:"whenever I can scrounge anything up", quirks:"can spot a mousetrap from a mile away",age:1,bio:"Time is a flat circle. I will do this again.",interactions:3},
    {id:4, username:"bigHiss", type:"snake", password:"abc", displayname: "ImASlitherySnake", profilepic:"http://4.bp.blogspot.com/-k8-RnJZpYr8/UUYLLs_OfGI/AAAAAAAAAek/9y8KicbnvwU/s1600/2271832-snake.jpg", eatinghabits:"a mouse a week", quirks:"is essentially one giant knee",age:7,bio:"Ive never told anyone, but I hate the taste of mice. I prefer phad thai.",interactions:4},
    {id:5, username:"birdieNumNum", type:"bird", password:"def", displayname: "DiveBombin24-7", profilepic:"https://cdn.audubon.org/cdn/farfuture/xX2dO2IN71t0tfGOITDQ0HSLNOml6xiRu_z3MU6Xx5M/mtime:1486669862/sites/default/files/styles/engagement_card/public/sfw_apa_2013_28342_232388_briankushner_blue_jay_kk_high.jpg?itok=ttMfUhUu", eatinghabits:"whenever something is dropped", quirks:"doesnt have the confidence to be the point of the V",age:3,bio:"It is not accident. I am aiming for you.",interactions:5}
  ])
  .then(() => {
    return knex.raw("SELECT setval('accounts_id_seq', (SELECT MAX(id) FROM accounts));")
  })
};
