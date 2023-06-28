/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "material" CASCADE');

  await knex('material').insert([
    {nome: 'Prego', quantidade: 150, preco: 1.5},
    {nome: 'Martelo', quantidade: 10, preco: 18.0},
    {nome: 'Cano', quantidade: 70, preco: 4.75}
  ]);
};