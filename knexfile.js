module.exports = {
  development: {
    client: 'pg',
    connection: { user: '', database: 'test', filename: './db', }
  },
  production: {
    client: 'pg',
    connection: {
      database: 'test',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }


};
