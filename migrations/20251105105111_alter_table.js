exports.up = function (knex) {
  return knex.schema.alterTable("school", function (table) {
    table.integer("contact_Number").notNullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("school", function (table) {
    table.decimal("contact_Number").notNullable().alter();
  });
};
