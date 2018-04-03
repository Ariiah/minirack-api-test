module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/minirack-dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
