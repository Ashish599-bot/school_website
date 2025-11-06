/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table('curricular', function (table) {
        table.renameColumn('name of extra-curricular', 'name');
        table.renameColumn('number of student', 'noOfStudent');
    });
};

exports.down = function (knex) {
    return knex.schema.table('curricular', function (table) {
        table.renameColumn('name', 'name of extra-curricular');
        table.renameColumn('noOfStudent', 'number of student');
    });
};