//migration table for chore
exports.up = function(knex, Promise) {
    return knex.schema.createTable('chores', (table) =>{
    table.increments();
    table.text('choreName').notNullable();
    table.text('description').notNullable();
    table.integer('value');
    table.date('dateDue');
    table.text('assignedTo');
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('chores');
  };