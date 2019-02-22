
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chatrooms', table => {
      table.increments()
      table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable();
      table.string('links').notNullable().default('')
      table.string('img').notNullable().default('')
      table.time('created_at')
      table.timestamp(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chatrooms')
};
