require('dotenv').config();

module.exports = {
  "development": {
    "username": "will",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "will",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "will",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
