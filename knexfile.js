const path = require('path')
const dbname = 'codinAlong'

module.exports = {
    development: {
        client: 'postgresql',
        connection: `postgresql://localhost:5432/${dbname}`,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    }
}