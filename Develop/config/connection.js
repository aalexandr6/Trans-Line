const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;  // variable that will hold connection to database

// check if the environment variable JAWSDB_URL exists
// if it does, then we are on Heroku and we should use the JAWSDB_URL
// if it doesn't, then we are on our local machine and we should use the local database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
        }
    );
}
module.exports = sequelize;