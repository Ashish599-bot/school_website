require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      password: process.env.PD_PASS,
      user: process.env.PD_USER,
      database: process.env.PD_DB,
      port: Number(process.env.PD_PORT) || 5432,
    }
  },
};
