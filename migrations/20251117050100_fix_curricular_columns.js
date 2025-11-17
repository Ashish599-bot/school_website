/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("curricular", function (table) {
    // Rename columns to remove spaces
    table.renameColumn("name of extra-curricular", "name");
    table.renameColumn("number of student", "noOfStudent");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("curricular", function (table) {
    // Revert column names
    table.renameColumn("name", "name of extra-curricular");
    table.renameColumn("noOfStudent", "number of student");
  });
};
