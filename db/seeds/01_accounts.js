exports.seed = function(knex, Promise) {
  return knex('accounts').insert([
    {id:1, userName:"meowser", type:"cat", password:"123", displayName: "Big Damage", profilePic:"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", eatingHabits:"often", quirks:"sleeps in boxes",age:14,bio:"I believe in nothing. I was born bloody and screaming. I will probably go out the same way",interactions:[]},
    {id:2, userName:"bigWood", type:"dog", password:"456", displayName: "HotDog4U", profilePic:"https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1484159404151.adapt.1900.1.jpg", eatingHabits:"whenever its clever", quirks:"catches my own tail",age:3,bio:"I think that the Godather is an overrated movie.",interactions:[]},
    {id:3, userName:"fievel", type:"mouse", password:"789", displayName: "ThePatriotsSuck206", profilePic:"https://cdn.images.express.co.uk/img/dynamic/130/590x/secondary/A-mouse-1028634.jpg", eatingHabits:"whenever I can scrounge anything up", quirks:"can spot a mousetrap from a mile away",age:1,bio:"Time is a flat circle. I will do this again.",interactions:[]},
    {id:4, userName:"bigHiss", type:"snake", password:"abc", displayName: "ImASlitherySnake", profilePic:"http://4.bp.blogspot.com/-k8-RnJZpYr8/UUYLLs_OfGI/AAAAAAAAAek/9y8KicbnvwU/s1600/2271832-snake.jpg", eatingHabits:"a mouse a week", quirks:"is essentially one giant knee",age:7,bio:"Ive never told anyone, but I hate the taste of mice. I prefer phad thai.",interactions:[]},
    {id:5, userName:"birdieNumNum", type:"bird", password:"def", displayName: "DiveBombin24-7", profilePic:"https://cdn.audubon.org/cdn/farfuture/xX2dO2IN71t0tfGOITDQ0HSLNOml6xiRu_z3MU6Xx5M/mtime:1486669862/sites/default/files/styles/engagement_card/public/sfw_apa_2013_28342_232388_briankushner_blue_jay_kk_high.jpg?itok=ttMfUhUu", eatingHabits:"whenever something is dropped", quirks:"doesnt have the confidence to be the point of the V",age:3,bio:"It is not accident. I am aiming for you.",interactions:[]}
  ])
  .then(() => {
    return knex.raw("SELECT setval('accounts_id_seq', (SELECT MAX(id) FROM accounts));")
  })
};
