
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_chatrooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_chatrooms').insert([
        {user_id: 1, chatroom_id: 1},
        {user_id: 2, chatroom_id: 2},
        {user_id: 3, chatroom_id: 3},
      ]);
    });
};
