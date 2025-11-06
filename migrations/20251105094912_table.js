exports.up = function (knex) {
  return knex.schema.createTable("school", function (table) {
    table.increments("id");
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.decimal("contact_Number").notNullable();
    table.integer("year_experience").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("school");
};
