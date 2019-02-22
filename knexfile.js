const path = require('path')

module.exports = {
    development: {
        client: 'postgresql',
        connection: `postgresql://localhost/5432/users`,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    }
}