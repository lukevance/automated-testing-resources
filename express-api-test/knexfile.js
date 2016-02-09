module.exports = {
  development: {
    client: 'pg',
    connection: 'localhost/express-api-test',
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};