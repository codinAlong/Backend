
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chatrooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('chatrooms').insert([
        {id: 1, user_id: 1 , links:"https://github.com/codinAlong",img:"otherstuff"},
        {id: 2, user_id: 2, links:"https://devhints.io/knex",img:"blah"},
        {id: 3, user_id: 2, links:"https://github.com/joeygaitan/moviecrud-backend/",img:"otherstuff"}
      ])
      .then(()=>{
        return knex.raw(`SELECT setval('chatrooms_id_seq', (SELECT MAX(id) FROM chatrooms));`)
      })
    });
};
