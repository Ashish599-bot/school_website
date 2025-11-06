exports.up = function (knex) {
  return knex.schema.alterTable("school", function (table) {
    table.string("job_title").notNullable();
    table.string("year_experience").notNullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("school", function (table) {
    table.dropColumn("job_title");
    table.integer("year_experience").notNullable().alter();
  });
};
