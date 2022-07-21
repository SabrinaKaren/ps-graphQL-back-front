// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  client: 'postgres',
  connection: {
    port: 5432,
    database: 'ps-db',
    user: 'postgres',
    password: 'YgwpSgX'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};