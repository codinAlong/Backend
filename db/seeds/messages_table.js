
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, user_id: 1, chatroom_id: 1, messages: "put stuff in here"},
        {id: 2, user_id: 2, chatroom_id: 2, messages: "put stuff in here"},
        {id: 3, user_id: 3, chatroom_id: 3, messages: "put stuff in here"},
      ]);
    });
};
