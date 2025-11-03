require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      host: "localhost",
      port: 5433,
    },
  },
};
