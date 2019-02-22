
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_chatrooms', table => {
      table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable()

      table.integer('chatroom_id').references('chatrooms.id').onDelete('CASCADE').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_chatrooms')
};
