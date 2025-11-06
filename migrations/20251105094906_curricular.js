/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('curricular', function (table) {
        table.increments('id'),
            table.string('name of extra-curricular', 100).notNullable(),
            table.string('coordinator', 50).notNullable().defaultTo('principal/vice-principal'),
            table.integer('number of student').notNullable().defaultTo(10),
            table.string('activity', 1000),
            table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('curricular')

};
