
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments()
      table.string('fname').notNullable().default('')
      table.string('lname').notNullable().default('')
      table.string('username').notNullable()
      table.string('img').notNullable().default('')
      table.string('password').notNullable()
      table.boolean("IsMentor")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
