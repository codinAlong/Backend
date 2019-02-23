
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, fname: "sam", lname: 'summers', username:"pandasummers", password: "$2b$10$6fzyRwsu5F31F454WJF.ueBrJVpKAsHqHfd3/KbN5UyOhlPZ9qBv.", img:"../../images/panda.jpeg"},
        {id: 2, fname: "hank", lname: 'redford', username:"foxford", password: "$2b$10$JmmTEAc.8tlZfNV9eHDteuaHnoeLB/UQSXPBDpaIHiANnqLrnHJba", img:"../../images/fox.jpeg"},
        {id: 3, fname: "fill", lname: 'crowns',username:"fillcrown", password: "$2b$10$zk33lNwqybM8cpEwE774fuq065MELRf3OKkw6kVQcwg6S0O1vRSaW", img:"../../images/crow.jpeg"}
      ])
      .then(()=>{
        return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
      })
    });
};
