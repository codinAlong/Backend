
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table =>{
    table.increments()
    table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable()
    table.integer('chatroom_id').references('chatrooms.id').onDelete('CASCADE').notNullable()
    table.text('messages').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages')
};
