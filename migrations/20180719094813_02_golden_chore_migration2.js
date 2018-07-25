// migration for kid table 
exports.up = function(knex, Promise) {
    return knex.schema.createTable('kids', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.integer('balance');
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('kids');
  };