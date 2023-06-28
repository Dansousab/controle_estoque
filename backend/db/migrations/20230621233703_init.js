/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('material', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable().unique();
        table.integer('quantidade').notNullable();
        table.decimal('preco', 6, 2).notNullable();
        table.timestamps(true, true);
    })  



};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
