
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, fname: "sam", lname: 'summers',username:"pandasummers",img:"../../images/panda.jpeg", },
        {id: 2, fname: "hank", lname: 'redford',username:"foxford",img:"../../images/fox.jpeg", },
        {id: 3, fname: "fill", lname: 'crowns',username:"fillcrown",img:"../../images/crow.jpeg", }
      ])
      .then(()=>{
        return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
      })
    });
};
